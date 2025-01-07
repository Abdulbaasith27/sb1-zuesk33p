import React from 'react';
import { Course } from '../../types/course';
import { CourseCard } from './CourseCard';

interface SearchResultsProps {
  courses: Course[];
  onCourseSelect: (course: Course) => void;
}

export function SearchResults({ courses, onCourseSelect }: SearchResultsProps) {
  if (courses.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow">
        <p className="text-gray-600">No courses found matching your criteria.</p>
        <p className="text-sm text-gray-500 mt-2">Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard
          key={`${course.name}-${index}`}
          course={course}
          onClick={() => onCourseSelect(course)}
        />
      ))}
    </div>
  );
}