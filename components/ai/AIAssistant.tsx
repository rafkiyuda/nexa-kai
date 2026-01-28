'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mic, Volume2 } from 'lucide-react';
import { useGemini } from '@/hooks/useGemini';

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, isLoading, sendMessage } = useGemini();
    const [input, setInput] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const recognitionRef = useRef<any>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!input.trim()) return;
        sendMessage(input);
        setInput("");
    };

    const handleVoiceInput = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
            return;
        }

        if (isRecording) {
            recognitionRef.current?.stop();
            setIsRecording(false);
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;

        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'id-ID'; // Indonesian language, change to 'en-US' for English

        recognition.onstart = () => {
            setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setIsRecording(false);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error:', event.error);
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
        };

        recognition.start();
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                layoutId="nexa-float"
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl bg-[var(--primary)] text-white hover:bg-[var(--secondary)] transition-colors ${isOpen ? 'hidden' : 'flex'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="relative">
                    <MessageCircle size={28} />
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                </div>
            </motion.button>

            {/* Chat Interface Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        layoutId="nexa-float"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] bg-[var(--card)] rounded-3xl shadow-2xl flex flex-col font-[family-name:var(--font-outfit)] overflow-hidden border border-[var(--border)]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-[var(--primary)] text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">NEXA</h3>
                                    <p className="text-xs text-white/80">Online • AI Assistant</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--muted)]">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-[var(--primary)] text-white rounded-br-none'
                                            : 'bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)] rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[var(--background)] p-4 rounded-2xl rounded-bl-none border border-[var(--border)] shadow-sm flex gap-1 items-center">
                                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-[var(--card)] border-t border-[var(--border)] shrink-0">
                            <div className="flex gap-2">
                                <button
                                    onClick={handleVoiceInput}
                                    className={`p-3 rounded-full transition-colors ${isRecording
                                        ? 'bg-red-500 text-white animate-pulse'
                                        : 'text-[var(--primary)] hover:bg-[var(--muted)]'
                                        }`}
                                >
                                    <Mic size={20} />
                                </button>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                        placeholder="Ask about trains, stations..."
                                        className="w-full bg-[var(--muted)] text-[var(--foreground)] rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                                    />
                                </div>
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="p-3 bg-[var(--primary)] text-white rounded-full hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
