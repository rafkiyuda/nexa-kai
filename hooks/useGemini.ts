import { useState, useCallback } from 'react';


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
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: text }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'model', text: data.text }]);
        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the network tailored for you. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { messages, isLoading, sendMessage };
};
