"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define types for messages
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Call backend service
    try {
      const response = await fetchBotResponse(inputValue);
      
      // Add bot message
      setMessages(prev => [...prev, { sender: 'bot', text: response }]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: "Sorry, I couldn't process your request." }]);
      setIsLoading(false);
    }
  };

  // Real function to call backend
  const fetchBotResponse = async (question: string): Promise<string> => {
    try {
      const response = await fetch('http://127.0.0.1:5000/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
  
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        return data.answer || "No answer provided";
      } else {
        const text = await response.text();
        return text || "No answer provided";
      }
    } catch (error) {
      console.error("Error fetching from backend:", error);
      throw error;
    }
  };
  

  const LoadingDots = (): React.ReactElement => (
    <div className="flex space-x-1 mt-4 ml-2">
      <motion.div
        className="h-2 w-2 rounded-full bg-white"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.5, repeatType: "reverse" }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-white"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.5, delay: 0.2, repeatType: "reverse" }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-white"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 0.5, delay: 0.4, repeatType: "reverse" }}
      />
    </div>
  );

  return (
    <div className="flex flex-col h-screen bg-[#242E35] text-white">
      <div className="text-center py-4 border-b border-[#3A4348]">
        <h1 className="text-xl font-medium">Capillary bot</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {messages.map((message, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center h-8 w-8 rounded-full border border-[#3A4348] mr-3">
                <span className="text-sm">{message.sender === 'user' ? 'u' : 'b'}</span>
              </div>
              
              <div className={`rounded-lg border bg-[#31343b] border-[#3A4348] p-4 ${message.sender === 'bot' ? 'w-full max-w-3xl' : 'max-w-md'}`}>
                {message.sender === 'user' ? (
                  <p>{message.text}</p>
                ) : (
                  <div>
                    <p className="mb-3">Bot answer</p>
                    <div className="border border-[#3A4348] rounded-lg p-4">
                      {message.text}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="mb-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center h-8 w-8 rounded-full border border-[#3A4348] mr-3">
                <span className="text-sm">b</span>
              </div>
              <LoadingDots />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-[#3A4348]">
        <form onSubmit={handleSubmit} className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 rounded-lg bg-transparent border border-[#3A4348] text-white focus:outline-none"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#1241A9] cursor-pointer'} text-white`}
            disabled={isLoading}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}