"use client";

import { Chat } from "@/components/ui/chat";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="w-full max-w-5xl mx-auto h-[calc(100vh-64px)] p-4">
        <div className="border rounded-md h-full overflow-hidden shadow-sm">
          <Chat />
        </div>
      </div>
    </main>
  );
} 