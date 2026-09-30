
"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login Data Submitted:", formData);
  };

  const floatAnimation = (delay: number): Variants => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  });

  return (
    <main className="relative min-h-screen w-full bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem] text-white flex items-center justify-center p-4 sm:p-8 lg:p-16 overflow-hidden">

      <Link href="/">
      <div className="absolute top-6 left-6 flex items-center gap-2 cursor-pointer z-50">
        <Image
          src="/images/logo.png"
          alt="ByteSpace Logo"
          width={24}
          height={30}
        />

        <Image
          src="/images/ByteSpace.png"
          alt="ByteSpace"
          width={110}
          height={110}
          className="object-contain"
        />
      </div>
      </Link>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 mt-12 lg:mt-0">

        <div className="lg:col-span-6 flex flex-col space-y-8">

          <div className="space-y-5">
            <span className="text-[#CCFF00] font-bold text-sm tracking-wide uppercase">
              Sign up and come in
            </span>

            <p className="text-blue-100 text-sm max-w-md font-light opacity-90 leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="relative w-full max-w-[450px] aspect-[4/3] hidden sm:block">


            <div className="absolute left-0 bottom-4 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-[#CCFF00] -rotate-12 select-none" />

            <div className="absolute left-10 top-16 w-16 h-16 rounded-full border-[8px] border-[#CCFF00] -z-10" />


            <motion.div
              variants={floatAnimation(0.5)}
              animate="animate"
              className="absolute left-4 top-16 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 text-gray-900 w-[240px] opacity-60 scale-90 origin-top-left"
            >
              <div className="w-full h-24 bg-gray-100 rounded-xl mb-2" />

              <span className="text-xs font-black block truncate">
                Build Digital UI Frameworks
              </span>

              <span className="text-[10px] text-blue-600 font-bold block mt-1">
                $25/lifetime
              </span>
            </motion.div>


            <motion.div
              variants={floatAnimation(0)}
              animate="animate"
              className="absolute right-4 top-4 bg-white rounded-3xl p-5 shadow-2xl border border-gray-100 text-gray-900 w-[290px] z-20"
            >
              <div className="w-full h-32 bg-slate-900 rounded-2xl mb-4 flex flex-col items-center justify-center text-white text-[10px] font-bold p-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0E52FE]/20 to-transparent pointer-events-none" />

                <span className="relative z-10">
                  📊 Analytics Chart Graphic
                </span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-black text-gray-900 tracking-tight">
                    The Power of Big Data
                  </h4>

                  <p className="text-[10px] text-gray-400 mt-0.5">
                    by purepearl studio
                  </p>
                </div>

                <span className="text-xs font-bold text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded-md shrink-0">
                  4.5 ★
                </span>
              </div>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">

                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full bg-gray-300 ring-2 ring-white"
                    />
                  ))}

                  <div className="w-5 h-5 bg-[#CCFF00] rounded-full flex items-center justify-center text-[8px] font-bold ring-2 ring-white">
                    26+
                  </div>
                </div>

                <span className="text-xs font-black text-[#0E52FE]">
                  $25
                  <span className="text-[9px] font-normal text-gray-400">
                    /lifetime
                  </span>
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={floatAnimation(1.2)}
              animate="animate"
              className="absolute left-20 -bottom-2 bg-[#CCFF00] rounded-2xl p-3 shadow-2xl text-gray-900 z-30 min-w-[170px]"
            >
              <span className="text-[10px] font-bold text-gray-900">
                Happy Students
              </span>

              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[10px] font-black text-gray-800">
                  4.5 ★
                </span>
              </div>

              <div className="flex -space-x-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gray-800/20 rounded-full ring-2 ring-[#CCFF00]"
                  />
                ))}

                <div className="w-4 h-4 bg-black text-[#CCFF00] rounded-full flex items-center justify-center text-[7px] font-bold ring-2 ring-[#CCFF00]">
                  2K+
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-2xl border border-blue-400/20 text-gray-900 flex flex-col"
          >

            <div className="space-y-1 mb-8">
              <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">
                Sign In
              </span>

              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Welcome Back
              </h2>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-gray-400"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  placeholder="designer@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  required
                  autoComplete="email"
                  className="rounded-xl h-11 border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300 px-4 text-sm w-full text-gray-900 placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="password"
                  className="text-xs font-bold text-gray-400"
                >
                  Password
                </label>

                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  required
                  minLength={6}
                  autoComplete="current-password"
                  className="rounded-xl h-11 border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300 px-4 text-sm w-full text-gray-900 placeholder:text-gray-300 tracking-widest"
                />
              </div>

              <div className="pt-2 flex flex-col items-end">
                <Button
                  type="submit"
                  className="bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-bold h-11 px-8 rounded-full text-sm transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  Sign In
                </Button>
              </div>
            </form>

            <div className="relative my-8 text-center">
              <hr className="border-gray-100" />

              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-gray-400 font-medium">
                or
              </span>
            </div>

            <div className="flex justify-center gap-4">

              <button
                type="button"
                aria-label="Continue with Facebook"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-lg font-black hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => console.log("Facebook OAuth Clicked")}
              >
                f
              </button>

              <button
                type="button"
                aria-label="Continue with Google"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-lg font-black hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => console.log("Google OAuth Clicked")}
              >
                G
              </button>

              <button
                type="button"
                aria-label="Continue with GitHub"
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-sm font-black hover:bg-gray-50 transition-colors focus:outline-none"
                onClick={() => console.log("GitHub OAuth Clicked")}
              >
                GH
              </button>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-bold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </div>

            <div className="mt-3 text-center">
              <Link
                href="/forgot-password"
                className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
