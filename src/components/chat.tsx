import { useState, useEffect, useRef } from 'react';

interface Message {
    id: string;
    content: string;
    role: 'user' | 'assistant';
    timestamp: string;
}

const Chat = () => {
    //state variables
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    //ref for scrolling 
    const containerRef = useRef<HTMLDivElement | null>(null);

    // auto scroll to the bottom when messages update
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
        <div id="chat" className="relative z-50 text-white mb-20 px-2 sm:px-4">
            <div className="text-3xl sm:text-4xl mb-4 text-center sm:text-left">Chat</div>
            <div className="w-full sm:max-w-3xl text-sm sm:text-xl mb-4 mx-auto sm:mx-0 text-center sm:text-left">
                <div>Have questions?</div>
                <div>Type what's on your mind into our chatbot.</div>
                <div>You'll find your answers right here.</div>
            </div>

            {/* Chat Container */}
            <div
                className="flex flex-col w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl 
             mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg
             h-[calc(100vh-8rem)]"
            >
                {/* Messages */}
                <div
                    ref={containerRef}
                    aria-live="polite"
                    className="flex-grow overflow-y-auto p-2 sm:p-4 space-y-4"
                >
                    {messages.length === 0 && (
                        <div className="flex items-center justify-center h-full">
                            <div className="text-base sm:text-2xl block text-center">
                                Ask anything about the Event
                            </div>
                        </div>
                    )}
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`max-w-[90%] sm:max-w-md px-4 py-2 rounded-xl break-words ${message.role === 'user' ? 'bg-teal-500/50' : 'bg-white/10'
                                    }`}
                            >
                                <div className="text-sm sm:text-lg whitespace-pre-wrap break-words">
                                    {message.content}
                                </div>
                                <div className="text-[10px] sm:text-xs mt-1 opacity-70">
                                    {new Date(message.timestamp).toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-white/10 px-4 py-2 rounded-xl max-w-xs">
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                                        <div
                                            className="w-2 h-2 bg-white rounded-full animate-bounce"
                                            style={{ animationDelay: '0.1s' }}
                                        ></div>
                                        <div
                                            className="w-2 h-2 bg-white rounded-full animate-bounce"
                                            style={{ animationDelay: '0.2s' }}
                                        ></div>
                                    </div>
                                    <span className="text-xs sm:text-sm">Searching...</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Area */}
                <div className="border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 m-4">
                        <textarea
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Start typing..."
                            className="flex-1 bg-white/10 px-3 py-2 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-[#008080] 
                   focus:border-transparent resize-y min-h-[3rem] 
                   text-sm sm:text-base w-full"
                            disabled={isLoading}
                            aria-label="Chat message input"
                            rows={1}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!inputValue.trim() || isLoading}
                            className="w-full sm:w-auto bg-teal-500/70 text-white px-4 py-2 rounded-lg 
                   hover:bg-teal-600/70 focus:outline-none focus:ring-2 
                   focus:ring-teal-700/50 disabled:opacity-50 
                   disabled:cursor-not-allowed transition-colors"
                            aria-label="Send message"
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto sm:mx-0"></div>
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


