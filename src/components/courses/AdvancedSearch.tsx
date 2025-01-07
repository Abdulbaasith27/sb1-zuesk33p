import React, { useState } from 'react';
import { Search, Filter, Calendar, MapPin, GraduationCap, BookOpen } from 'lucide-react';
import { SearchFilters } from './types';

interface AdvancedSearchProps {
  onSearch: (filters: SearchFilters) => void;
  initialFilters: SearchFilters;
}

export function AdvancedSearch({ onSearch, initialFilters }: AdvancedSearchProps) {
  const [filters, setFilters] = useState<SearchFilters>(initialFilters);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch({ ...filters, searchTerm });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      {/* Main Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for courses..."
          className="w-full pl-14 pr-4 py-4 text-lg rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        />
      </div>

      {/* Filter Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {/* Subject Area */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Subject Area
          </label>
          <select 
            name="subject"
            value={filters.subject}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">All Subjects</option>
            <option value="business">Business & Management</option>
            <option value="engineering">Engineering</option>
            <option value="computing">Computing & IT</option>
            <option value="medicine">Medicine & Healthcare</option>
          </select>
        </div>

        {/* Study Level */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            Study Level
          </label>
          <select 
            name="level"
            value={filters.level}
            onChange={handleInputChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">All Levels</option>
            <option value="foundation">Foundation</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">PhD</option>
          </select>
        </div>

        {/* Rest of the filters... */}

      </div>

      {/* Search Button */}
      <div className="mt-6">
        <button 
          onClick={handleSearch}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 text-lg shadow-md hover:shadow-lg"
        >
          <Search className="w-6 h-6" />
          Search Courses
        </button>
      </div>
    </div>
  );
}