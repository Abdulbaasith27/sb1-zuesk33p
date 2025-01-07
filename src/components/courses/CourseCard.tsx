import React from 'react';
import { Clock, MapPin, GraduationCap, Building2 } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.name}</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-600">
            <GraduationCap className="w-4 h-4" />
            <span>{course.category}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>{course.universities[0]}</span>
          </div>
        </div>

        <p className="mt-4 text-gray-600 line-clamp-2">{course.description}</p>
        
        <button 
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
}