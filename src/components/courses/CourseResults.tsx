import React from 'react';
import { CourseCard } from './CourseCard';
import { Loader } from 'lucide-react';

interface CourseResultsProps {
  results: any[];
  isLoading: boolean;
}

export function CourseResults({ results, isLoading }: CourseResultsProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader className="w-8 h-8 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-600">No courses found matching your criteria.</p>
        <p className="text-sm text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {results.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
}