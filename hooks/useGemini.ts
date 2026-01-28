import { useState, useCallback } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export type Message = {
    role: 'user' | 'model';
    text: string;
};

export const useGemini = () => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'model', text: 'Hello! I am NEXA, your personal travel assistant. How can I help you gently explore Indonesia today?' }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const sendMessage = useCallback(async (text: string) => {
        setMessages(prev => [...prev, { role: 'user', text }]);
        setIsLoading(true);

        try {
            let replyText = "";
            if (apiKey) {
                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({ model: "gemini-pro" });
                const result = await model.generateContent(text);
                const response = await result.response;
                replyText = response.text();
            } else {
                // Mock behavior
                await new Promise(resolve => setTimeout(resolve, 1500));
                replyText = "I'm currently in demo mode. I can help you find trains to Bandung or guide you to the nearest lounge.";
                if (text.toLowerCase().includes('toilet')) replyText = "The nearest toilet is located on the 1st floor, near the North Entrance.";
                if (text.toLowerCase().includes('train')) replyText = "I can help you with that. Where would you like to go?";
            }

            setMessages(prev => [...prev, { role: 'model', text: replyText }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the network tailored for you. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { messages, isLoading, sendMessage };
};
