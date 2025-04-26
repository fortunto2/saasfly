"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@saasfly/ui/button";
import { ColourfulText } from "@saasfly/ui/colorful-text";

export function SectionSuperSaas({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm">
              <span className="text-blue-600 dark:text-blue-400">✨ {dict?.scheduling_simplified ?? "Scheduling Simplified"}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              {dict?.manage_appointments ?? "Manage Appointments"} <br />
              <span className="relative">
                <ColourfulText 
                  text={dict?.effortlessly ?? "Effortlessly"} 
                />
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              {dict?.description ?? "SuperSaas provides a powerful scheduling system that helps businesses and professionals manage their appointments, bookings and resources in one place."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/register">
                  {dict?.get_started ?? "Get Started Free"}
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <Link href="/pricing">
                  {dict?.view_pricing ?? "View Pricing"}
                </Link>
              </Button>
            </div>
            
            <div className="pt-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block rounded-full overflow-hidden border-2 border-white dark:border-gray-900 h-8 w-8">
                    <Image 
                      src={`/images/avatars/avatar-${i}.jpg`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                <strong>5,000+</strong> {dict?.happy_users ?? "happy users"}
              </span>
            </div>
          </div>

          {/* Right Side: Interactive Calendar Demo */}
          <motion.div 
            className="relative rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0.8, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl z-0"
              animate={{ 
                opacity: isHovered ? 1 : 0.5,
                scale: isHovered ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
              <div className="px-4 py-3 border-b dark:border-gray-800 bg-gray-50 dark:bg-gray-900 flex items-center justify-between">
                <h3 className="font-medium">SuperSaas Calendar</h3>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">{day}</div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }).map((_, i) => {
                    const day = i + 1;
                    const isToday = day === 15;
                    const hasEvent = [3, 8, 12, 15, 19, 24, 27].includes(day);
                    
                    return (
                      <button
                        key={day}
                        className={`aspect-square p-1 rounded-md relative ${
                          isToday 
                            ? "bg-blue-600 text-white" 
                            : hasEvent 
                              ? "hover:bg-gray-100 dark:hover:bg-gray-800"
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="text-sm">{day}</span>
                        {hasEvent && !isToday && (
                          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
                        )}
                      </button>
                    );
                  })}
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="p-2 rounded-md bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-sm font-medium">Team Meeting</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">10:00 AM</span>
                    </div>
                  </div>
                  <div className="p-2 rounded-md bg-purple-50 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-600" />
                      <span className="text-sm font-medium">Client Consultation</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-auto">2:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 