"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  
  // Основной сайт на порту 3000
  const mainAppUrl = "http://localhost:3000";
  
  return (
    <header className="sticky top-0 z-40 flex w-full justify-center border-b border-border bg-background/60 backdrop-blur-xl transition-all">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex gap-6 md:gap-10">
          <div className="flex items-center">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
              <div className="text-3xl">Saasfly</div>
            </Link>
            <div className="ml-4 hidden md:flex lg:flex xl:flex">
              <div className="ml-2 flex h-6 items-center rounded-md bg-muted px-2 text-xs font-semibold text-primary transition-colors">
                AI Chat
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={`flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm ${
                pathname === "/" ? "text-blue-500 font-semibold" : ""
              }`}
            >
              Чат
            </Link>
          </nav>

          <div className="w-[1px] h-8 bg-accent"></div>

          <a href={mainAppUrl} className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Вернуться в Saasfly
          </a>
        </div>
      </div>
    </header>
  );
} 