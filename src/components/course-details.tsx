"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Share2,
  Star,
  Users,
  BarChart2,
  CheckCircle2,
  FileText,
  Video,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("About");

  // Chapters
  const chapters = [
    {
      id: "01",
      title: "Introduction to Digital Assets",
      duration: "12 mins",
    },
    {
      id: "02",
      title: "Design Principles for Impacts",
      duration: "21 mins",
    },
    {
      id: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ];

  const images = [
    {
      id: 1,
      image: "/images/Rectangle.png"
    },
    {
      id: 2,
      image: "/images/Rectangle-1.png"
    },
    {
      id: 3,
      image: "/images/Rectangle-2.png"
    },
    {
      id: 4,
      image: "/images/Rectangle-2.png"
    }
  ]

  // Course inclusion features
  const inclusionFeatures = [
    {
      id: 1,
      text: "Learning Resources",
      icon: FileText,
    },
    {
      id: 2,
      text: "Quality Lesson Videos",
      icon: Video,
    },
    {
      id: 3,
      text: "Certificate of Completion",
      icon: Award,
    },
    {
      id: 4,
      text: "Private Consultation",
      icon: Users,
    },
  ];

  // Key points
  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
  ];

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="w-full bg-white select-none">
      <div className="w-full bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem] text-white pt-32 pb-32 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center">
        <div className="w-full max-w-6xl">
          {/* Title + Metadata */}
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-[24px] lg:text-[36px] font-semibold">
                Build Digital Asset: A Comprehensive Guide
              </h1>

              <p className="text-blue-100 text-sm sm:text-base font-normal opacity-95">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="text-xs sm:text-sm font-bold text-[#CCFF00] tracking-wide">
                by PurePearl Studio
              </p>

              {/* Metadata */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {/* Level */}
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-400 rotate-90" />
                  Intermediate
                </div>

                {/* Rating */}
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  4.8 (172 reviews)
                </div>

                {/* Students */}
                <div className="bg-white text-gray-900 px-4 py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-sm">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  199 Students
                </div>
              </div>
            </div>

            {/* Share Button */}
            <button
              type="button"
              className="bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-bold px-5 h-11 rounded-full text-sm flex items-center gap-2 transition-transform duration-200 active:scale-95 shadow-md shrink-0 focus:outline-none self-end md:self-start"
            >
              <Share2 className="w-4 h-4 stroke-[2.5]" />
              Share
            </button>
          </div>

          {/* Video Player */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 hidden lg:flex relative overflow-hidden flex items-center justify-center group min-h-[260px] sm:min-h-[340px]">
              {/* Video Background */}
              <div className="absolute" />
              <Image className="w-[600px] h-[600px] object-contain" src="/images/video.png" alt="" width={500} height={500}/>
            </div>

            {/* Desktop Spacer */}
            <div className="lg:col-span-5 hidden lg:block" />
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-gray-900 px-4 sm:px-6 md:px-12 lg:px-24 flex justify-center relative">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

          <div className="lg:col-span-7 flex flex-col space-y-8 pt-12 pb-24">
            {/* Tabs */}
            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full w-fit border border-gray-100">
              {["About", "Lessons", "Reviews"].map((tab) => {
                const isSelected = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none cursor-pointer ${
                      isSelected
                        ? "bg-[#CCFF00] text-black shadow-sm"
                        : "text-gray-400 hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Dynamic Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === "About" && (
                <motion.div
                  key="about"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  className="space-y-8"
                >
                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Description
                    </h3>

                    <div className="text-gray-500 text-sm sm:text-base font-normal leading-relaxed space-y-4 text-justify">
                      <p>
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course,
                        &ldquo;Build Digital Assets: A Comprehensive
                        Guide.&rdquo; This transformative learning experience
                        invites you to delve deep into the intricacies of
                        crafting impactful digital content.
                      </p>

                      <p>
                        In the initial modules, you&apos;ll establish a solid
                        foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset
                        creation. Understand the fundamental elements that
                        constitute compelling digital content.
                      </p>

                      <p>
                        As you progress through the course, you&apos;ll ascend
                        to higher levels of expertise, delving into the nuances
                        of design principles that drive impactful creations.
                        Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and
                        layout strategies.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Sneak Peak
                    </h3>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {images.map((image) => (
                        <div
                          key={image.id}
                        >
                          <Image src={image.image} alt="" width={400} height={400}/>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 tracking-tight">
                      Key Points
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                      {keyPoints.map((point, index) => (
                        <div
                          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                          key={index}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#0E52FE] shrink-0 fill-blue-50" />

                          <span className="text-sm sm:text-base font-bold text-gray-700 tracking-tight">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}


              {activeTab === "Lessons" && (
                <motion.div
                  key="lessons"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-black text-gray-900">
                    Course Lessons
                  </h3>

                  <div className="space-y-3">
                    {chapters.map((chapter) => (
                      <div
                        key={chapter.id}
                        className="flex items-center justify-between gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-black text-gray-400">
                            {chapter.id}
                          </span>

                          <span className="text-sm font-bold text-gray-800">
                            {chapter.title}
                          </span>
                        </div>

                        <span className="text-xs font-bold text-blue-500 shrink-0">
                          {chapter.duration}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}


              {activeTab === "Reviews" && (
                <motion.div
                  key="reviews"
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  variants={fadeInUp}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-black text-gray-900">
                    Student Reviews
                  </h3>

                  <div className="p-6 rounded-2xl border border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                      <span className="font-black">4.8 / 5</span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      This course has received positive feedback from students
                      who completed the lessons.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


          <div className="lg:col-span-4 w-full flex flex-col space-y-6 pt-12 lg:pt-0 transform lg:-translate-y-[620px] lg:sticky lg:top-6 z-30 pb-16 lg:pb-0">
            <div className="bg-white border border-gray-100 text-gray-900 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl flex flex-col min-h-[680px]">
              <div>
                <h3 className="text-xl font-black text-gray-900 tracking-tight mb-6">
                  112 Lessons{" "}
                  <span className="text-sm font-medium text-gray-400 ml-1">
                    (24 hours)
                  </span>
                </h3>

                <div className="flex flex-col space-y-4">
                  {chapters.map((ch) => (
                    <div
                      key={ch.id}
                      className="flex justify-between items-start gap-4 py-1 text-sm"
                    >
                      <div className="flex gap-3">
                        <span className="font-bold text-gray-400 shrink-0">
                          {ch.id}
                        </span>

                        <span className="font-bold text-gray-800 leading-snug tracking-tight hover:text-[#0E52FE] transition-colors cursor-pointer">
                          {ch.title}
                        </span>
                      </div>

                      <span className="text-xs font-bold text-blue-500 shrink-0">
                        {ch.duration}
                      </span>
                    </div>
                  ))}
                </div>

                <span className="text-xs font-bold text-gray-400 block mt-4 px-8 cursor-pointer hover:underline">
                  99 more videos
                </span>
              </div>


              <div className="mt-8 pt-6 border-t border-gray-100 space-y-5">
                <div className="space-y-1">
                  <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-xs">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <div className="text-3xl font-black text-[#0E52FE] pt-1">
                    $25
                    <span className="text-xs font-medium text-gray-400 tracking-normal">
                      /lifetime
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-black h-12 rounded-full text-base transition-all shadow-md focus:outline-none tracking-tight"
                >
                  Enroll Now
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                <h4 className="text-base font-black text-gray-900 tracking-tight">
                  This course includes
                </h4>

                <div className="flex flex-col space-y-3.5">
                  {inclusionFeatures.map((feat) => {
                    const IconComp = feat.icon;

                    return (
                      <div
                        key={feat.id}
                        className="flex items-center gap-3 text-sm sm:text-base font-bold text-gray-600 hover:text-[#0E52FE] transition-colors cursor-pointer"
                      >
                        <IconComp className="w-5 h-5 text-[#0E52FE] shrink-0" />

                        <span>{feat.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>


              <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-center gap-3.5">
                  {/* Creator Avatar */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-pink-100 shrink-0 ring-2 ring-blue-50">
                    <Image src="/images/studio.png" alt="" width={50} height={50}/>
                  </div>

                  <div>
                    <h4 className="font-extrabold text-gray-900 text-base tracking-tight">
                      PurePearl Studio
                    </h4>

                    <p className="text-xs text-gray-400 font-medium mt-0.5">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-extrabold h-11 px-6 rounded-full text-xs sm:text-sm shadow-sm transition-colors focus:outline-none cursor-pointer text-center"
                >
                  See Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}