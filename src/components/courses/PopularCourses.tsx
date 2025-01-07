import React from 'react';
import { BookOpen } from 'lucide-react';

const courses = [
  'MBA (Master of Business Administration)',
  'Computer Science & IT',
  'Engineering (Mechanical, Electrical, Civil)',
  'Data Science & Analytics',
  'Healthcare & Nursing',
  'Law',
  'Business & Management'
];

export function PopularCourses() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Popular Courses</h3>
      </div>
      <ul className="space-y-3">
        {courses.map((course) => (
          <li key={course} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-gray-700">{course}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}