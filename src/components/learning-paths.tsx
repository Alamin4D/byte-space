"use client";

import { motion, Variants } from "framer-motion";
import { Palette, Code2, Monitor, Building2, Megaphone, Camera } from "lucide-react";


const pathsData = [
  { id: 1, title: "Design", icon: Palette },
  { id: 2, title: "Development", icon: Code2 },
  { id: 3, title: "IT & Software", icon: Monitor },
  { id: 4, title: "Business", icon: Building2 },
  { id: 5, title: "Marketing", icon: Megaphone },
  { id: 6, title: "Photography", icon: Camera },
];

export default function LearningPaths() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };


  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white text-gray-900 py-20 px-4 md:px-8 flex flex-col items-center border-t border-gray-50">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
      >
        {pathsData.map((path) => {
          const IconComponent = path.icon;
          return (
            <motion.div
              key={path.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05), 0 8px 10px -6px rgb(0 0 0 / 0.05)" 
              }}
              className="bg-white border-2 border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center aspect-square cursor-pointer transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#CCFF00] rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                <IconComponent className="w-6 h-6 text-black transition-transform duration-500 group-hover:rotate-12" />
              </div>

              <span className="font-semibold text-gray-800 text-sm md:text-base tracking-tight transition-colors group-hover:text-blue-600">
                {path.title}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}
