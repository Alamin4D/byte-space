"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CreatorCTA() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const shapeFloating: Variants = {
    animate: {
      y: [0, -12, 0],
      //   rotate:,
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="relative w-full bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:3rem_3rem] text-white flex flex-col items-center justify-center text-center p-8 md:p-16 overflow-hidden shadow-xl">
        <motion.div
          variants={shapeFloating}
          animate="animate"
          className="absolute left-4 top-6 w-16 h-16 opacity-90 hidden md:block select-none text-[#CCFF00] text-5xl font-bold"
        >
          ⌇
        </motion.div>

        <motion.div
          variants={shapeFloating}
          animate="animate"
          className="absolute left-8 -bottom-6 w-20 h-20 bg-[#CCFF00] rounded-full border-[12px] border-[#0E52FE] outline outline-4 outline-[#CCFF00] hidden lg:block select-none"
        />

        <motion.div
          //   animate={{ y:, rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-20 top-8 w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-[#CCFF00] hidden md:block select-none"
        />

        <motion.div
          variants={shapeFloating}
          animate="animate"
          className="absolute right-12 bottom-4 w-16 h-16 opacity-90 hidden md:block select-none text-[#CCFF00] text-5xl font-bold"
        >
          ⌇
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], rotate: [15, 5, 15] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 top-8 w-20 h-32 bg-white/20 backdrop-blur-sm rounded-3xl transform rotate-12 hidden lg:block select-none"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="relative z-10 max-w-3xl flex flex-col items-center space-y-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl"
          >
            Unlock Your Potential as a <br /> Creator with ByteSpace
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xs md:text-sm text-blue-100 font-light opacity-90 leading-relaxed max-w-2xl"
          >
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-2">
            <Button className="bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-bold px-8 h-12 rounded-full text-sm transition-transform duration-200 shadow-md hover:scale-105">
              Join as Creator
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
