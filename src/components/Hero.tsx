"use client";

import { motion, Variants } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Hero() {

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative flex w-full flex-col justify-between overflow-hidden bg-[#0E52FE] px-4 pb-16 pt-28 text-white sm:px-6 md:pt-36 lg:px-8">

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />


      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-6 top-1/4 hidden h-20 w-20 rounded-full bg-[#CCFF00] opacity-80 blur-sm xl:block"
      />


      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-16 top-1/4 hidden select-none text-8xl font-bold text-[#CCFF00] xl:block"
      >
        ✦
      </motion.div>


      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-grow flex-col items-center justify-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-4xl flex-col items-center text-center"
        >

          <motion.h1
            variants={itemVariants}
            className="max-w-3xl text-3xl font-black leading-[1.15] tracking-tight sm:text-5xl sm:leading-tight lg:text-6xl"
          >
            Get Access to Hundreds
            <br className="hidden sm:inline" /> Courses Available
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-lg px-2 text-sm font-normal text-blue-100 opacity-90 sm:mt-6 sm:text-base"
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </motion.p>

          <motion.form
            variants={itemVariants}
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex w-full max-w-xl flex-col items-center gap-2 rounded-2xl border border-blue-400/20 bg-white p-2 shadow-2xl sm:mt-10 sm:flex-row sm:rounded-full"
          >

            <div className="flex w-full items-center pl-3 pr-2 text-gray-400">
              <Search
                aria-hidden="true"
                className="mr-2 h-5 w-5 shrink-0 text-gray-400"
              />

              <Input
                type="search"
                placeholder="Course, topic, creator"
                aria-label="Search for courses, topics, or creators"
                className="h-10 w-full border-0 bg-transparent text-sm text-gray-800 shadow-none outline-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-base"
              />
            </div>


            <Button
              type="submit"
              className="h-11 w-full shrink-0 rounded-xl bg-[#CCFF00] px-8 text-sm font-bold text-black shadow-sm transition-all duration-200 hover:bg-[#b0dc00] sm:w-auto sm:rounded-full sm:text-base"
            >
              Search
            </Button>
          </motion.form>
        </motion.div>


        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative sm:mt-16 w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[520px] aspect-square flex flex-col justify-end items-center mx-auto"
        >

          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -z-10 w-[160%] h-[160%] aspect-square -translate-x-1/2 translate-y-[60%] rounded-full bg-[#CCFF00]"
          />


          <div className="relative z-10 w-full h-full flex items-end justify-center">
            <Image
              src="/images/Image.png"
              alt="Student learning online"
              fill
              priority
              sizes="(max-width: 640px) 250px, (max-width: 1024px) 400px, 500px"
              className="object-contain object-bottom scale-105 translate-12"
            />
          </div>


          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="absolute left-[-5%] top-[55%] z-20 flex min-w-[120px] flex-col rounded-xl border border-gray-100 bg-white px-3 py-2 text-gray-900 shadow-2xl sm:min-w-[160px] sm:rounded-2xl sm:px-4 sm:py-3"
          >
            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 sm:text-xs">
              UI/UX Design
            </span>

            <div className="mt-0.5 flex items-center gap-1 sm:mt-1 sm:gap-2">
              <span className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold text-blue-600 sm:text-xs">
                200 Courses
              </span>
            </div>
          </motion.div>


          <motion.div
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="absolute right-[-8%] top-[55%] z-20 flex min-w-[130px] flex-col rounded-xl border border-gray-100 bg-white p-3 text-gray-900 shadow-2xl sm:min-w-[170px] sm:rounded-2xl sm:p-4"
          >
            <span className="text-[9px] font-medium text-gray-400 sm:text-xs">
              Learning Progress
            </span>

            <span className="mt-0.5 text-xl font-black leading-none text-gray-900 sm:text-3xl">
              55%
            </span>

            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#0E52FE]" />
            </div>
          </motion.div>


          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4.5,
              ease: "easeInOut",
            }}
            className="absolute bottom-[5%] left-[-10%] z-20 flex min-w-[110px] flex-col rounded-xl border border-gray-100 bg-white p-2 text-gray-900 shadow-2xl sm:min-w-[140px] sm:rounded-2xl sm:p-3"
          >
            <span className="text-[9px] font-bold text-gray-800 sm:text-xs">
              Happy Students
            </span>

            <div className="mt-0.5 flex items-center gap-1">
              <span className="text-[9px] font-bold text-amber-500 sm:text-xs">
                4.5
              </span>

              <span
                aria-hidden="true"
                className="text-[9px] text-amber-400 sm:text-xs"
              >
                ★
              </span>
              <span className="text-[8px] text-gray-400 sm:text-[10px]">
                (240)
              </span>
            </div>


            <div className="mt-2 flex -space-x-1.5 overflow-hidden">
              {[1, 2, 3].map((student) => (
                <div
                  key={student}
                  className="h-5 w-5 rounded-full bg-gray-200 ring-2 ring-white sm:h-6 sm:w-6"
                />
              ))}

              <div className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[8px] font-bold text-black ring-2 ring-white sm:h-6 sm:w-6 sm:text-[9px]">
                2K+
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
