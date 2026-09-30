"use client";

import React from "react";
import { Waves, Sun, Zap, Target, Globe2 } from "lucide-react"; // ডামি লোগো আইকন হিসেবে Lucide ইম্পোর্ট করা হলো

export default function TrustedLogos() {
  // লোগোর ডাটা অ্যারে (আপনি চাইলে পরবর্তীতে আপনার আসল SVG বা ইমেজ দিয়ে এগুলো রিপ্লেস করতে পারেন)
  const logos = [
    { id: 1, name: "Logoipsum", icon: Waves },
    { id: 2, name: "Logoipsum", icon: Sun },
    { id: 3, name: "Logoipsum", icon: Zap },
    { id: 4, name: "Logoipsum", icon: Target },
    { id: 5, name: "Logoipsum", icon: Globe2 },
  ];

  return (
    <section className="w-full bg-[#F4F4F4] py-8 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center border-b border-gray-100/10">
      
      {/* 
        লোগো রেন্ডারিং গ্রিড: 
        মোবাইলে এটি স্ক্রিনের উইথ অনুযায়ী সুন্দরভাবে র‍্যাপ (wrap) হবে অথবা নিচে নিচে স্ট্যাক হবে 
        এবং বড় স্ক্রিনে একটি চমৎকার সোজা লাইনে ৫টি লোগো ইকুয়াল স্পেসিংয়ে শো করবে।
      */}
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16 lg:justify-between opacity-50 grayscale transition-opacity hover:opacity-75 duration-300">
        
        {logos.map((logo) => {
          const IconComponent = logo.icon;
          return (
            <div 
              key={logo.id} 
              className="flex items-center gap-2 text-gray-700 select-none cursor-pointer"
            >
              {/* কোম্পানি লোগো আইকন মার্ক */}
              <IconComponent className="w-6 h-6 stroke-[2]" />
              
              {/* লোগো টেক্সট ব্র্যান্ড */}
              <span className="text-base sm:text-lg font-bold tracking-tight">
                {logo.name}
              </span>
            </div>
          );
        })}

      </div>
    </section>
  );
}
