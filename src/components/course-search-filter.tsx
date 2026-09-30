"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  ArrowUpDown,
  BarChart4,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Grid,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import CourseCard from "./course-card";

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

const ITEMS_PER_PAGE = 3;

export default function CourseSearchFilter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

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

  const filteredCourses = useMemo(() => {
    return allCoursesMockData.filter((course) => {
      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Featured" && course.rating >= 4.7) ||
        course.category === activeCategory;

      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredCourses.length / ITEMS_PER_PAGE),
  );

  const sanitizedCurrentPage = Math.min(currentPage, totalPages);

  const paginatedCourses = useMemo(() => {
    const startIndex = (sanitizedCurrentPage - 1) * ITEMS_PER_PAGE;

    return filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCourses, sanitizedCurrentPage]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <section className="w-full flex flex-col items-center bg-white text-gray-900">
      <div className="w-full bg-[#0E52FE] bg-[linear-gradient(to_right,#1b5eff_1px,transparent_1px),linear-gradient(to_bottom,#1b5eff_1px,transparent_1px)] bg-[size:4rem_4rem] pt-24 pb-20 px-4 md:px-8 text-white flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-8"
        >
          Find Your Next Course
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-3xl flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <div className="relative w-full max-w-xl bg-white rounded-full px-5 py-3 flex items-center shadow-lg border border-blue-400/20 text-gray-800">
            <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />

            <input
              type="text"
              placeholder="Search by course name or studio..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent border-0 outline-none p-0 text-base placeholder:text-gray-400 text-gray-900 focus:ring-0"
            />
          </div>

          <button
            type="button"
            className="w-full sm:w-auto bg-[#CCFF00] hover:bg-[#b0dc00] text-black font-extrabold px-6 h-12 rounded-full text-base flex items-center justify-center gap-2 transition-all shrink-0 shadow-md focus:outline-none"
          >
            Courses
            <ChevronDown className="w-4 h-4 stroke-[3]" />
          </button>
        </motion.div>
      </div>

      <div className="w-full bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          <div className="w-full flex flex-col sm:flex-row gap-4 justify-between items-center border-b border-gray-100 pb-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                type="button"
                className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
                Filter
              </button>

              <button
                type="button"
                className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                <BarChart4 className="w-3.5 h-3.5 text-gray-500 rotate-90" />
                Level
              </button>

              <button
                type="button"
                className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors focus:outline-none"
              >
                <Grid className="w-3.5 h-3.5 text-gray-500" />
                Category
              </button>
            </div>

            <button
              type="button"
              className="px-4 py-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors focus:outline-none shrink-0"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-gray-500" />
              Most relevant
            </button>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                },
              },
            }}
            className="w-full flex flex-wrap gap-2 pt-2 overflow-x-auto no-scrollbar"
          >
            {categories.map((category) => {
              const isSelected = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  variants={fadeInUp}
                  onClick={() => handleCategoryChange(category)}
                  whileTap={{ scale: 0.97 }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 ${
                    isSelected
                      ? "bg-[#CCFF00] text-black font-extrabold shadow-sm border border-[#CCFF00]"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100 border border-transparent"
                  }`}
                >
                  {category}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-6xl px-4 md:px-8 pb-12">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
            className="text-gray-400 text-sm text-center mt-8"
          >
            No courses found matching your criteria. Try another keyword!
          </motion.p>
        )}

        {filteredCourses.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {/* Previous */}
            <button
              type="button"
              disabled={sanitizedCurrentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNum) => {
                const isPageActive = sanitizedCurrentPage === pageNum;

                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-full text-sm font-bold flex items-center justify-center transition-all ${
                      isPageActive
                        ? "bg-[#0E52FE] text-white shadow-md shadow-blue-500/20"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-label={`Go to page ${pageNum}`}
                    aria-current={isPageActive ? "page" : undefined}
                  >
                    {pageNum}
                  </button>
                );
              },
            )}

            <button
              type="button"
              disabled={sanitizedCurrentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="p-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors focus:outline-none cursor-pointer disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
