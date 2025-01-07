import { useState, useCallback } from 'react';
import { courseCategories } from '../courseData';
import { Course, SearchFilters } from '../types';

export function useSearchCourses() {
  const [results, setResults] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchCourses = useCallback((filters: SearchFilters, searchTerm: string) => {
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const allCourses = courseCategories.flatMap(category => category.courses);
      
      const filteredCourses = allCourses.filter(course => {
        const matchesSearch = searchTerm ? 
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        const matchesSubject = !filters.subject || course.name.toLowerCase().includes(filters.subject.toLowerCase());
        const matchesLevel = !filters.level || course.category.toLowerCase().includes(filters.level.toLowerCase());
        const matchesUniversity = !filters.university || course.universities.some(uni => 
          uni.toLowerCase().includes(filters.university.toLowerCase())
        );

        return matchesSearch && matchesSubject && matchesLevel && matchesUniversity;
      });

      setResults(filteredCourses);
      setIsLoading(false);
    }, 500);
  }, []);

  return { results, isLoading, searchCourses };
}