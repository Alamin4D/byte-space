"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-white text-gray-900 pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-gray-100 flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gray-100">
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="ByteSpace Logo"
              width={24}
              height={30}
            />
            <span className="text-xl font-bold tracking-tight">ByteSpace</span>
          </div>

          <p className="text-gray-500 text-sm max-w-sm font-normal">
            Stay up to date with our latest features and releases by joining our
            newsletter.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex items-center gap-2 pt-2 max-w-md w-full"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full h-11 border-gray-200 focus-visible:ring-1 focus-visible:ring-gray-300 text-gray-800 placeholder:text-gray-400 bg-white px-4 text-sm w-full"
            />
            <Button
              type="submit"
              className="bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-semibold h-11 px-6 rounded-full text-sm transition-colors shrink-0 shadow-sm"
            >
              Search
            </Button>
          </form>

          <p className="text-[11px] text-gray-400 max-w-xs leading-normal">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Featured Courses
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Featured Categories
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Business
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              IT
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Design
            </Link>
          </div>

          <div className="flex flex-col space-y-3">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Development
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Marketing
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Photography
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Finance
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Sport
            </Link>
          </div>

          <div className="flex flex-col space-y-3 col-span-2 sm:col-span-1">
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Become a Creator
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Affiliate Program
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Connect
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-normal">
        <div>© 2026 ByteSpace. All rights reserved.</div>
        <div className="flex gap-6">
          <Link href="#" className="hover:underline transition-all">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline transition-all">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline transition-all">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
