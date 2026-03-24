import Link from 'next/link';
import { CATEGORIES } from '@/types/course';

export default function CategoryNav() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">课程分类</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{category.icon}</span>
              </div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-1">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}