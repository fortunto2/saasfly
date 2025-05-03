"use client";

import { useThreadList, useAssistantRuntime } from "@assistant-ui/react";
import { useMemo } from "react";

export function ThreadList() {
  const threadListState = useThreadList();
  const runtime = useAssistantRuntime();
  
  // Мемоизируем список потоков для предотвращения ререндеров
  const threads = useMemo(() => threadListState?.threads || [], [threadListState?.threads]);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4 p-2 border-b">
        <h2 className="font-semibold">Чаты</h2>
        <button 
          onClick={() => {
            if (runtime.switchToNewThread) runtime.switchToNewThread();
          }}
          className="p-1 px-2 text-sm bg-blue-600 text-white rounded"
        >
          Новый
        </button>
      </div>
      
      <div className="space-y-2 overflow-y-auto flex-1">
        {threads.length ? (
          threads.map((threadId: string, index: number) => (
            <button 
              key={threadId || index} 
              className="w-full text-left p-3 border rounded cursor-pointer hover:bg-gray-50"
              onClick={() => {
                if (runtime.switchToThread) runtime.switchToThread(threadId);
              }}
            >
              Чат {index + 1}
            </button>
          ))
        ) : (
          <div className="p-3 text-gray-500 text-center">
            Нет диалогов
          </div>
        )}
      </div>
    </div>
  );
} 