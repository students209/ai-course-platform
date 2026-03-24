import Link from 'next/link';
import { Course, CATEGORIES } from '@/types/course';
import { Play, Clock, BookOpen } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const category = CATEGORIES.find(c => c.id === course.category);
  const chapterCount = course.chapters.length;

  return (
    <Link href={`/course/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={course.coverImage}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Free Badge */}
          {course.isFree && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              免费
            </span>
          )}
          {/* Chapter Count Badge */}
          <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {chapterCount}集
          </span>
          {/* Play Button */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-6 h-6 text-blue-600 ml-1" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Category Badge */}
          <div className="flex items-center mb-2">
            <span className={`text-xs px-2 py-1 rounded ${category?.color} text-white`}>
              {category?.icon} {category?.name}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {course.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center text-sm text-gray-400 space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.totalDuration}
            </span>
            <span className="flex items-center">
              <BookOpen className="w-4 h-4 mr-1" />
              {chapterCount}集
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {course.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}