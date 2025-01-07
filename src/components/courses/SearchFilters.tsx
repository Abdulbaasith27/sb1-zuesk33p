import React, { useState } from 'react';
import { Search, GraduationCap, BookOpen, Building2, MapPin, Calendar } from 'lucide-react';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    subject: '',
    level: '',
    university: '',
    location: '',
    intake: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onSearch(newFilters);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Subject Area */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            Subject Area
          </label>
          <select
            name="subject"
            value={filters.subject}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">All Subjects</option>
            <option value="Business">Business & Management</option>
            <option value="Computer">Computing & IT</option>
            <option value="Engineering">Engineering</option>
            <option value="Medicine">Medicine & Health</option>
            <option value="Law">Law</option>
          </select>
        </div>

        {/* Study Level */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            Study Level
          </label>
          <select
            name="level"
            value={filters.level}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">All Levels</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
            <option value="Foundation">Foundation</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        {/* University */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Building2 className="w-4 h-4 text-blue-600" />
            University
          </label>
          <select
            name="university"
            value={filters.university}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">Any University</option>
            <option value="Oxford">University of Oxford</option>
            <option value="Cambridge">University of Cambridge</option>
            <option value="Imperial">Imperial College London</option>
            <option value="UCL">University College London</option>
            <option value="LSE">London School of Economics</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            Location
          </label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">Any Location</option>
            <option value="London">London</option>
            <option value="Manchester">Manchester</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Edinburgh">Edinburgh</option>
            <option value="Glasgow">Glasgow</option>
          </select>
        </div>

        {/* Intake */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            Intake
          </label>
          <select
            name="intake"
            value={filters.intake}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-200"
          >
            <option value="">Any Intake</option>
            <option value="January 2025">January 2025</option>
            <option value="September 2025">September 2025</option>
            <option value="January 2026">January 2026</option>
            <option value="September 2026">September 2026</option>
          </select>
        </div>
      </div>
    </div>
  );
}