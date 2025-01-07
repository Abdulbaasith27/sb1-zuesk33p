import React from 'react';
import { SearchSection } from './SearchSection';

export function CourseSection() {
  return (
    <section className="bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          Find Your Perfect Course
        </h2>
        
        <SearchSection />
      </div>
    </section>
  );
}