"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChatRedirect() {
  const router = useRouter();
  
  // Чат запущен на порту 3001
  const chatUrl = "http://localhost:3001";

  useEffect(() => {
    // Перенаправляем на чат
    window.location.href = chatUrl;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-xl font-semibold mb-4">Переадресация на чат...</div>
      <div className="text-gray-500">Если вы не были перенаправлены автоматически, 
        <a href={chatUrl} className="text-blue-500 hover:underline ml-1">
          нажмите здесь
        </a>
      </div>
    </div>
  );
} 