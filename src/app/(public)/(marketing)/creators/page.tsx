"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowUpDown, BarChart4, Grid, SlidersHorizontal } from "lucide-react";

import CreatorProfile from "@/components/creator-profile";
import CourseCard from "@/components/course-card";

const allCoursesMockData = [
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

const categories = [
  "All",
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export default function CreatorPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 6;

  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const filteredCourses = useMemo(() => {
    if (activeCategory === "All" || activeCategory === "Featured") {
      return allCoursesMockData;
    }

    return allCoursesMockData.filter(
      (course) => course.category === activeCategory,
    );
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;

    return filteredCourses.slice(startIndex, endIndex);
  }, [filteredCourses, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-white">
      <CreatorProfile />

      <div className="flex w-full flex-col items-center bg-white px-4 py-10 sm:px-6 md:px-12 lg:px-24">
        <div className="flex w-full max-w-6xl flex-col gap-6">
          <div className="flex w-full flex-col items-center justify-between gap-4 border-b border-gray-100 pb-6 sm:flex-row">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none sm:text-sm"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-gray-500" />
                Filter
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none sm:text-sm"
              >
                <BarChart4 className="h-3.5 w-3.5 rotate-90 text-gray-500" />
                Level
              </button>

              <button
                type="button"
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none sm:text-sm"
              >
                <Grid className="h-3.5 w-3.5 text-gray-500" />
                Category
              </button>
            </div>

            <button
              type="button"
              className="flex shrink-0 items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 transition-colors hover:bg-gray-50 focus:outline-none sm:text-sm"
            >
              <ArrowUpDown className="h-3.5 w-3.5 text-gray-500" />
              Most relevant
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 md:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {paginatedCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
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
                  duration: 0.3,
                }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCourses.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-sm text-gray-400"
          >
            No courses found matching your criteria.
          </motion.p>
        )}
      </div>
    </main>
  );
}
