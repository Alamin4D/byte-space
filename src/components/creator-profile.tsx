"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CreatorProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <section className="w-full bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem] text-white pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-start overflow-hidden select-none">
      <div className="w-full max-w-5xl flex flex-col space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[2rem] overflow-hidden bg-pink-400 border-2 border-white/10 shrink-0 shadow-lg">
            <Image
              src="/images/creator.png"
              alt="PurePearl Studio"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                PurePearl Studio
              </h1>

              <span className="bg-[#CCFF00] text-black font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Creator
              </span>
            </div>
            <p className="text-blue-100 text-sm sm:text-base font-medium opacity-90">
              Passionate UI/UX, Web designer
            </p>
          </div>
        </div>

        <div className="max-w-4xl space-y-4 text-sm sm:text-base text-blue-50 font-normal leading-relaxed opacity-95">
          <p>
            Welcome to the creative world of PurePearl Studio. Here, you'll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let's explore and learn together!
          </p>
          <p>
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>
        </div>

        <div className="w-full flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center pt-4 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md border border-gray-100">
              3 Products
            </div>
            <div className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold shadow-md border border-gray-100">
              12 Followers
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsFollowing(!isFollowing)}
            type="button"
            className={`w-full sm:w-auto font-black px-8 h-12 rounded-full text-sm sm:text-base transition-all shadow-lg focus:outline-none cursor-pointer flex items-center justify-center ${
              isFollowing
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-[#CCFF00] text-black hover:bg-[#b0dc00]"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
