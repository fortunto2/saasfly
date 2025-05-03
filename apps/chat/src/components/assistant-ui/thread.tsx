"use client";

import { useThread } from "@assistant-ui/react";
import { useState, useCallback, useMemo } from "react";

export function Thread() {
  const threadState = useThread() as any;
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Мемоизируем идентификатор треда, чтобы избежать лишних обновлений
  const threadId = useMemo(() => threadState?.threadId, [threadState?.threadId]);
  
  // Мемоизируем сообщения для предотвращения лишних ререндеров
  const messages = useMemo(() => threadState?.messages || [], [threadState?.messages]);
  
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (inputValue.trim() && threadState?.sendMessage && threadId) {
      setIsLoading(true);
      try {
        await threadState.sendMessage(inputValue);
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsLoading(false);
        setInputValue("");
      }
    }
  }, [inputValue, threadState?.sendMessage, threadId]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4">
        {!threadId ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Выберите чат или создайте новый
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-500">
            Напишите что-нибудь, чтобы начать диалог
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message: any, index: number) => (
              <div 
                key={message.id || index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {typeof message.content === 'string' 
                    ? message.content 
                    : 'Сообщение не поддерживается'
                  }
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {threadId && (
        <div className="border-t p-4">
          <form 
            onSubmit={handleSubmit} 
            className="flex gap-2"
          >
            <input
              name="message"
              className="flex-1 rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Введите сообщение..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Отправка...' : 'Отправить'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
} 