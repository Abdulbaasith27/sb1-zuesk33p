import React, { useState } from 'react';
import { courseCategories } from './courseData';
import { SearchFilters } from './SearchFilters';
import { SearchResults } from './SearchResults';
import { CourseDetails } from './CourseDetails';
import { Course } from '../../types/course';

export function SearchSection() {
  const [searchResults, setSearchResults] = useState<Course[]>(
    courseCategories.flatMap(category => category.courses)
  );
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleSearch = (filters: any) => {
    const allCourses = courseCategories.flatMap(category => category.courses);
    
    const filtered = allCourses.filter(course => {
      const matchesSubject = !filters.subject || 
        course.name.toLowerCase().includes(filters.subject.toLowerCase());
      
      const matchesLevel = !filters.level || 
        course.category.includes(filters.level);
      
      const matchesUniversity = !filters.university || 
        course.universities.some(uni => 
          uni.toLowerCase().includes(filters.university.toLowerCase())
        );

      return matchesSubject && matchesLevel && matchesUniversity;
    });

    setSearchResults(filtered);
  };

  return (
    <div className="space-y-8">
      <SearchFilters onSearch={handleSearch} />
      <SearchResults 
        courses={searchResults} 
        onCourseSelect={setSelectedCourse} 
      />
      
      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </div>
  );
}