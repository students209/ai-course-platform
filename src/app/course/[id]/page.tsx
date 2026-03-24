'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getCourseById, getCoursesByCategory } from '@/data/courses';
import { CATEGORIES } from '@/types/course';
import CourseCard from '@/components/CourseCard';
import { ArrowLeft, Clock, BookOpen, Eye, Tag, Calendar } from 'lucide-react';

export default function CoursePage() {
  const params = useParams();
  const courseId = params.id as string;
  
  const course = getCourseById(courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">课程不存在</h1>
          <Link href="/courses" className="text-blue-600 hover:text-blue-700">
            浏览全部课程
          </Link>
        </div>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.id === course.category);
  const relatedCourses = getCoursesByCategory(course.category)
    .filter(c => c.id !== course.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 no-select">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">首页</Link>
            <span className="text-gray-400">/</span>
            <Link href="/courses" className="text-gray-500 hover:text-gray-700">课程</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/category/${course.category}`} className="text-gray-500 hover:text-gray-700">
              {category?.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">{course.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden aspect-video mb-6 relative">
              <iframe
                src={course.openmaicUrl}
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-forms"
              />
              {/* 防护遮罩 */}
              <div 
                className="absolute inset-0 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Course Info */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                {course.isFree && (
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                    免费课程
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{course.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  时长：{course.duration}
                </span>
                <span className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {course.lessons} 节课
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {course.views.toLocaleString()} 次学习
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {course.createdAt}
                </span>
              </div>

              {/* Tags */}
              <div className="flex items-center mt-6 pt-6 border-t">
                <Tag className="w-4 h-4 mr-2 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Category Card */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">所属分类</h3>
              <Link
                href={`/category/${course.category}`}
                className={`flex items-center p-4 rounded-lg ${category?.color} text-white hover:opacity-90 transition-opacity`}
              >
                <span className="text-3xl mr-3">{category?.icon}</span>
                <div>
                  <p className="font-semibold">{category?.name}</p>
                  <p className="text-sm text-white/80">{category?.description}</p>
                </div>
              </Link>
            </div>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">相关课程</h3>
                <div className="space-y-4">
                  {relatedCourses.map((related) => (
                    <Link
                      key={related.id}
                      href={`/course/${related.id}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <img
                          src={related.coverImage}
                          alt={related.title}
                          className="w-20 h-14 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{related.duration}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}