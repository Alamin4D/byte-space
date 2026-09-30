"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem] text-white flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6 select-none">
      
      {/* ================= CONTAINER FOR NOT FOUND CONTENT ================= */}
      <div className="w-full max-w-3xl flex flex-col items-center z-10 space-y-6">
        
        {/* === HUGE 404 TEXT WITH FIGMA LIME GRADIENT === */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[9rem] sm:text-[14rem] md:text-[18rem] font-black tracking-tighter leading-none select-none bg-gradient-to-b from-[#CCFF00] via-[#CCFF00] to-white/40 bg-clip-text text-transparent filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)]"
        >
          404
        </motion.h1>

        {/* === PRIMARY ERROR MESSAGE === */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl px-2"
        >
          The page you are looking <br className="hidden sm:inline" /> for doesn&apos;t exist
        </motion.h2>

        {/* === SECONDARY HELP TEXT === */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm text-blue-100 font-normal max-w-md opacity-80 pt-2"
        >
          Try to use a correct url or go back to homepage to start again
        </motion.p>

        {/* === BACK TO HOME INTERACTIVE BUTTON === */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-6"
        >
          <Link href="/">
            <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center justify-center bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-extrabold px-8 h-12 rounded-full text-sm sm:text-base transition-colors shadow-xl cursor-pointer text-center"
        >
    Back to Home
  </motion.div>
</Link>
        </motion.div>

      </div>

      {/* Decorative Blur Shapes to match the subtle glow from Figma */}
      <div className="absolute left-[-10%] top-[-10%] w-96 h-96 bg-blue-600/30 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[-10%] w-96 h-96 bg-[#CCFF00]/10 rounded-full filter blur-[120px] pointer-events-none" />

    </main>
  );
}
