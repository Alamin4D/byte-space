"use client";


import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


const testimonialsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/Ellipse.png",
    quote: "“ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.”"
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/Ellipse-1.png",
    quote: "“I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.”"
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/Ellipse-2.png",
    quote: "“As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.”"
  }
];

export default function Testimonials() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="w-full bg-gradient-to-l from-yellow-100 via-lime-50/20 to-blue-100 text-gray-900 py-24 px-4 md:px-8 lg:px-16 flex flex-col items-center overflow-hidden">
      
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[24px] lg:text-[40px] tracking-tight text-gray-900 leading-tight"
        >
          Discover What Our <br /> Community Is Saying
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-500 text-sm md:text-base font-normal leading-relaxed lg:pt-2"
        >
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonialsData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-start">
              <CardContent className="p-0 flex flex-col space-y-6">
                
                <div className="flex flex-col items-start space-y-3">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 ring-4 ring-offset-2 ring-blue-50">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-900 text-lg tracking-tight">{item.name}</h4>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{item.role}</p>
                  </div>
                </div>


                <p className="text-gray-600 text-sm font-normal leading-relaxed italic">
                  {item.quote}
                </p>

              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}
