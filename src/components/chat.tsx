"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: string;
}

const exampleMessages = [
    "Who made this website?",
    "What even are these track based sessions?",
    "Give me more information about the Panel Discussion.",
    "Is coming to IEEE Day at NSBM even worth it?",
    "Who is Sithum Sankajith?",
    "What's up with this event passport thingy?",
    "Will the participant get free food?",
    "What is the best University in Sri Lanka?"
]

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mainMessageRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

    }, []);

    // auto scroll to the bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue.trim(),
            role: 'user',
            timestamp: new Date().toISOString(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: inputValue.trim() }),
            });

            const data = await response.json();

            const assistantMessage: Message = {
                id: Date.now().toString(),
                content: data?.answer || 'Sorry, no answer received.',
                role: 'assistant',
                timestamp: new Date().toISOString(),
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: Message = {
                id: Date.now().toString(),
                content: 'Sorry, something went wrong. Please try again.',
                role: 'assistant',
                timestamp: new Date().toISOString(),
            };
            setMessages(prev => [...prev, errorMessage]);
        }

        setIsLoading(false);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div id="chat" className='relative z-50 mb-10 sm:mb-10 md:mb-20 text-white text-center sm:text-center md:text-left'>
            <div className="text-3xl sm:text-3xl md:text-4xl mb-2 sm:mb-4 md:mb-4">Chat</div>
            <div className="md:max-w-3xl text-lg sm:text-lg md:text-xl mb-4 sm:mb-4 md:mb-4">
                <div>
                    Have questions?
                </div>
                <div>
                    Type what's on your mind into our chatbot.
                </div>
                <div>
                    You'll find your answers right here.
                </div>
            </div>
            <div className="flex flex-col h-120 sm:h-120 md:h-160 w-xs sm:w-xs md:w-5xl mx-auto bg-white/5 backdrop-blur-lg">
                <div ref={containerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length === 0 && (
                        <div className='flex items-center justify-center h-full'>
                            <div ref={mainMessageRef} className='text-xl sm:text-xl md:text-3xl block'>Ask anything about the Event</div>
                        </div>
                    )}
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`max-w-xs sm:max-w-xs md:max-w-md px-2 sm:px-2 md:px-4 py-1 sm:py-1 md:py-2 text-left ${message.role === 'user' ? 'bg-teal-500/50' : 'bg-white/10'}`}>
                                <div className='text-sm sm:text-sm md:text-lg whitespace-pre-wrap'>{message.content}</div>
                                <div className='text-xs'>
                                    {new Date(message.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 px-2 sm:px-2 md:px-4 py-1 sm:py-1 md:py-2 max-w-xs">
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        <div className="w-1 sm:w-1 md:w-2 h-1 sm:h-1 md:h-2 bg-white rounded-full animate-bounce"></div>
                                        <div className="w-1 sm:w-1 md:w-2 h-1 sm:h-1 md:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                        <div className="w-1 sm:w-1 md:w-2 h-1 sm:h-1 md:h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    </div>
                                    <span className="text-xs sm:text-xs md:text-sm">Searching...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex space-x-2 m-4">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="What is IEEE Day?"
                            className="flex-1 bg-white/10 text-sm sm:text-sm md:text-base px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent resize-none h-10 sm:h-10 md:h-12"
                            disabled={isLoading}
                            aria-label="Chat message input"
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className="bg-teal-500/50 text-white w-14 sm:w-14 md:w-20 text-sm sm:text-sm md:text-base px-2 sm:px-2 md:px-4 py-1 sm:py-1 md:py-2 hover:bg-teal-600/50 focus:outline-none focus:ring-2 focus:ring-teal-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Send message"
                        >
                            {isLoading ? (
                                <div className="w-3 sm:w-3 md:w-5 h-3 sm:h-3 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin m-auto"></div>
                            ) : (
                                'Send'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;