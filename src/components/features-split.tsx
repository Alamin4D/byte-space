"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Play, Sparkles, Users } from "lucide-react";

export default function FeaturesSplit() {
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = (delay: number): Variants => ({
    animate: {
      y: [0, -12, 0],
      rotate: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa] py-24 md:py-32 bg-gradient-to-tb from-[#95a849] via-[#FAFAFA] to-[#0E52FE] to-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#CBFC01]/20 blur-[120px]" />
        <div className="absolute -right-40 top-[40%] h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow-300/10 blur-[100px]" />

        <div className="absolute right-[12%] top-[25%] h-3 w-3 rounded-full bg-[#CCFF00]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-32 px-5 md:px-10 lg:px-16">
       

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="flex flex-col"
          >

            <h2 className="text-[24px] lg:text-[40px] font-semibold">
              Your Path to Professional <br/> Growth Starts Here.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Build
              practical skills, gain industry knowledge, and move confidently
              toward your goals.
            </p>

            {/* Stats */}
            <div className="mt-9 grid max-w-lg grid-cols-3 py-6">
              <div>
                <span className="block text-3xl font-black tracking-tight text-[#0E52FE] md:text-4xl">
                  12K+
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 md:text-xs">
                  Students
                </span>
              </div>

              <div className="pl-5">
                <span className="block text-3xl font-black tracking-tight text-[#0E52FE] md:text-4xl">
                  70+
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 md:text-xs">
                  Courses
                </span>
              </div>

              <div className="pl-5">
                <span className="block text-3xl font-black tracking-tight text-[#0E52FE] md:text-4xl">
                  16
                </span>
                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400 md:text-xs">
                  Creators
                </span>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="relative flex min-h-[500px] items-center justify-center"
          >
            <div className="absolute h-[340px] w-[340px] rounded-full bg-[#CBFC01]/30 blur-[90px]" />

            {/* Decorative Circle */}
            <div className="absolute h-[400px] w-[400px] rounded-full border border-dashed border-gray-300/70" />

            <div className="absolute h-[310px] w-[310px] rounded-full border border-gray-200/70" />

            {/* Main Image Card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[390px] w-[300px] overflow-hidden rounded-[40px] border border-white/80 bg-white/70 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:h-[430px] md:w-[330px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-[#CBFC01]/20" />

              <Image
                src="/images/Image.png"
                alt="Professional Career Growth"
                fill
                className="object-contain p-4 translate-y-20"
              />
            </motion.div>

            {/* Course Floating Card */}
            <motion.div
              variants={floatingVariants(0)}
              animate="animate"
              className="absolute left-0 top-16 z-20 w-[175px] rounded-2xl border border-white/80 bg-white/90 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl md:left-2 md:w-[190px]"
            >
              <div className="relative mb-3 h-20 overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/images/Image.png"
                  alt="Course"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                <div className="absolute bottom-2 left-2 rounded-md bg-[#CBFC01] px-2 py-1 text-[8px] font-black text-gray-900">
                  POPULAR
                </div>
              </div>

              <p className="truncate text-[11px] font-bold text-gray-900">
                Learn Figma from scratch
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-400">
                  Design Course
                </span>

                <span className="text-sm font-black text-[#0E52FE]">
                  $25
                </span>
              </div>
            </motion.div>

            {/* Progress Card */}
            <motion.div
              variants={floatingVariants(1.5)}
              animate="animate"
              className="absolute right-0 top-[38%] z-20 w-[155px] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl md:right-0 md:w-[175px]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-gray-400">
                  Learning Progress
                </span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CBFC01]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gray-900" />
                </span>
              </div>

              <div className="text-3xl font-black tracking-tight text-gray-950">
                55%
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "55%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="h-full rounded-full bg-[#0E52FE]"
                />
              </div>

              <p className="mt-2 text-[9px] font-medium text-gray-400">
                Keep going — you&apos;re doing great!
              </p>
            </motion.div>

            {/* Small Decoration */}
            <div className="absolute right-8 top-6 z-0 text-7xl font-black text-[#CBFC01]">
              ~
            </div>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative order-2 flex min-h-[500px] items-center justify-center lg:order-1"
          >
            {/* Glow */}
            <div className="absolute h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[90px]" />

            {/* Main Circle */}
            <div className="absolute h-[400px] w-[400px] rounded-full border border-dashed border-gray-300/70" />

            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="relative z-10 h-[390px] w-[300px] overflow-hidden rounded-[40px] border border-white bg-white/80 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl md:h-[430px] md:w-[330px]"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400/40 via-transparent to-yellow-700/20" />

              <Image
                src="/images/girl.png"
                alt="Create Courses Dashboard"
                fill
                className="object-contain p-4 translate-y-20"
              />
            </motion.div>

            {/* Revenue Card */}
            <motion.div
              variants={floatingVariants(0.5)}
              animate="animate"
              className="absolute left-0 z-10 top-[22%] w-[165px] rounded-2xl bg-[#0E52FE] p-4 text-white shadow-[0_20px_50px_rgba(14,82,254,0.3)] md:left-2 md:w-[180px]"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[9px] font-medium text-white/60">
                  Total Revenue
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 text-[#CBFC01]" />
              </div>

              <span className="block text-2xl font-black">$120.29</span>

              <div className="mt-4 border-t border-white/10 pt-3">
                <span className="block text-[9px] text-white/50">
                  Year To Date
                </span>

                <span className="mt-0.5 block text-sm font-bold">
                  $1,200.38
                </span>
              </div>
            </motion.div>

            {/* Students Card */}
            <motion.div
              variants={floatingVariants(2)}
              animate="animate"
              className="absolute bottom-10 right-0 z-20 w-[175px] rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl md:right-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-900">
                  Happy Students
                </span>

                <Users className="h-4 w-4 text-[#0E52FE]" />
              </div>

              <div className="mt-3 flex items-center">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-white bg-gray-200 shadow-sm"
                  />
                ))}

                <div className="-ml-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#CBFC01] text-[8px] font-black text-gray-900">
                  2K+
                </div>
              </div>

              <p className="mt-3 text-[9px] font-medium text-gray-400">
                Growing every day
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="order-1 flex flex-col lg:order-2"
          >

            <h2 className="text-[24px] lg:text-[40px] font-semibold">
              Create & Manage <br/> Courses Easily.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-500 md:text-lg">
              <span className="font-bold text-gray-900">ByteSpace</span>{" "}
              supports individuals and organizations in creating, publishing,
              and managing educational courses — all from one simple platform.
            </p>


            <div className="flex flex-col space-y-4 pt-2"> 
              {[ "Share Your Expertise", 
                "Monetize Your Passion", 
                "Flexibility and Autonomy", 
                "Build a Community" ]
                .map((text, index) => ( 
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
<div key={index} className="flex items-center gap-3"> <CheckCircle2 className="w-5 h-5 text-[#0E52FE] shrink-0" /> 
                <span className="text-sm md:text-base font-semibold text-gray-700">{text}</span> 
                </div> 
              ))} 
                </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}