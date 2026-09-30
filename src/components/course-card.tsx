"use client";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  image: string;
}

export default function CourseCard({
  title,
  instructor,
  lessons,
  duration,
  comments,
  rating,
  price,
  image,
}: CourseCardProps) {
  return (
    <div className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2.5rem] bg-white h-full flex flex-col p-4">
      
      <div className="relative w-full aspect-[341/195] bg-gray-100 rounded-[2rem] overflow-hidden group">
        <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-white text-xs font-semibold">
          {image && image.startsWith("/") ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span>Course Thumbnail</span>
          )}
        </div>
        
        <div className="absolute bottom-3 left-3 right-3 bg-white/70 backdrop-blur-md text-gray-800 text-[11px] font-bold px-4 py-2 rounded-full flex justify-between items-center shadow-sm">
          <span>{lessons} Lessons</span>
          <span className="border-x border-gray-300 px-3">{duration}</span>
          <span>{comments} Comments</span>
        </div>
      </div>

      <div className="px-2 pt-5 pb-2 flex-grow flex flex-col justify-between">
        <div className="space-y-1.5">
          
          <div className="flex justify-between items-start gap-4">
            <h3 className="font-extrabold text-lg text-gray-900 tracking-tight leading-snug cursor-pointer hover:text-[#0E52FE] transition-colors line-clamp-2">
              {title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 pt-1">
              <span className="text-sm font-black text-gray-700">{rating.toFixed(1)}</span>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            </div>
          </div>
          
          <p className="text-xs text-blue-600 font-bold uppercase tracking-wider">
            by {instructor}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-4 py-1.5 rounded-full text-xs font-bold text-gray-600">
            <BarChart2 className="w-3.5 h-3.5 text-gray-400 rotate-90" />
            Beginner
          </div>

          <div className="flex -space-x-2 overflow-hidden items-center">
            <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-red-200" />
            <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-amber-200" />
            <div className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-teal-200" />
            <div className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#CCFF00] text-[9px] font-black text-black ring-2 ring-white">
              26+
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-50 flex items-center">
          <span className="text-xl font-black text-[#0E52FE] tracking-tight">
            ${price}
            <span className="text-xs font-medium text-gray-400 tracking-normal">/lifetime</span>
          </span>
        </div>
      </div>
    </div>
  );
}
