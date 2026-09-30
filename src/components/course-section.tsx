"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart2, Star } from "lucide-react";
import Link from "next/link";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const coursesData = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    category: "UI/UX Design",
    image: "/images/Frame.png",
    price: 25,
  },
  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.8,
    category: "Featured",
    image: "/images/build.png",
    price: 25,
  },
  {
    id: 3,
    title: "Analysis of Big Data",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    category: "Data Science",
    image: "/images/data.png",
    price: 25,
  },
  {
    id: 4,
    title: "Balancing Productivity and Self-Care",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    category: "UI/UX Design",
    image: "/images/self-care.png",
    price: 25,
  },
  {
    id: 5,
    title: "Mastering Money Management",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.8,
    category: "Featured",
    image: "/images/money.png",
    price: 25,
  },
  {
    id: 6,
    title: "From Idea to Startup Success",
    instructor: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    category: "Data Science",
    image: "/images/success.png",
    price: 25,
  },
];

export default function CourseSection() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const filteredCourses =
    selectedCategory === "Featured"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  return (
    <section className="w-full bg-white text-gray-900 py-20 px-4 md:px-8 flex flex-col items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        variants={fadeInVariants}
        className="text-center max-w-3xl mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="w-full max-w-5xl flex flex-wrap justify-center gap-2 md:gap-3 mb-16"
      >
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <motion.button
              key={category}
              variants={fadeInVariants}
              type="button"
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border ${
                isActive
                  ? "bg-[#CCFF00] text-black border-[#CCFF00] shadow-sm font-bold"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </motion.button>
          );
        })}

        <Button
          type="button"
          variant="ghost"
          className="px-4 py-2 text-xs md:text-sm font-bold text-blue-600 hover:underline"
        >
          + More
        </Button>
      </motion.div>

      <motion.div
        layout
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <motion.div
              layout
              key={course.id}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <Link href={`/courses/${course.id}`}>
                <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2.5rem] bg-white h-full flex flex-col p-4">
                  <div className="relative w-full aspect-[341/195] rounded-[2rem] overflow-hidden group">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <CardContent className="px-2 pt-5 pb-2 flex-grow flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-semibold text-lg text-gray-900 tracking-tight leading-snug cursor-pointer hover:text-[#0E52FE] transition-colors line-clamp-2">
                          {course.title}
                        </h3>

                        <div className="flex items-center gap-1 shrink-0 pt-1">
                          <span className="text-base font-bold text-gray-700">
                            {course.rating.toFixed(1)}
                          </span>

                          <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
                        </div>
                      </div>

                      <p className="text-sm text-blue-600 font-medium">
                        by {course.instructor}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-xs font-bold text-gray-600">
                        <BarChart2 className="w-3.5 h-3.5 text-gray-400 rotate-90" />
                        Beginner
                      </div>

                      <div className="flex -space-x-2.5 overflow-hidden items-center">
                        <Image
                          src="/images/Ellipse.png"
                          alt=""
                          width={10}
                          height={10}
                          className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-red-200"
                        />
                        <Image
                          src="/images/Ellipse-1.png"
                          alt=""
                          width={10}
                          height={10}
                          className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-red-200"
                        />
                        <Image
                          src="/images/Ellipse-2.png"
                          alt=""
                          width={10}
                          height={10}
                          className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-red-200"
                        />
                        <Image
                          src="/images/Ellipse-3.png"
                          alt=""
                          width={10}
                          height={10}
                          className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-red-200"
                        />

                        <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-black text-black ring-2 ring-white">
                          26+
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-50 flex items-center">
                      <span className="text-2xl font-black text-[#0E52FE] tracking-tight">
                        ${course.price}
                        <span className="text-xs font-medium text-gray-400 tracking-normal">
                          /lifetime
                        </span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredCourses.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-400 text-sm mt-8"
        >
          No courses found in this category at the moment.
        </motion.p>
      )}
    </section>
  );
}
