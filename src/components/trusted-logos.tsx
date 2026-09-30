"use client";

import React from "react";
import { Waves, Sun, Zap, Target, Globe2 } from "lucide-react";

export default function TrustedLogos() {
  const logos = [
    { id: 1, name: "Logoipsum", icon: Waves },
    { id: 2, name: "Logoipsum", icon: Sun },
    { id: 3, name: "Logoipsum", icon: Zap },
    { id: 4, name: "Logoipsum", icon: Target },
    { id: 5, name: "Logoipsum", icon: Globe2 },
  ];

  return (
    <section className="w-full bg-[#F4F4F4] py-8 sm:py-10 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center border-b border-gray-100/10">
      
      
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16 lg:justify-between opacity-50 grayscale transition-opacity hover:opacity-75 duration-300">
        
        {logos.map((logo) => {
          const IconComponent = logo.icon;
          return (
            <div 
              key={logo.id} 
              className="flex items-center gap-2 text-gray-700 select-none cursor-pointer"
            >

              <IconComponent className="w-6 h-6 stroke-[2]" />
              

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
