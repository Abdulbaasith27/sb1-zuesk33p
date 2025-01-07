import React from 'react';
import { BookOpen } from 'lucide-react';

const subjects = [
  // Business & Economics
  { id: 'business', name: 'Business & Management', count: 245 },
  { id: 'economics', name: 'Economics & Finance', count: 178 },
  { id: 'accounting', name: 'Accounting', count: 156 },
  { id: 'marketing', name: 'Marketing', count: 134 },
  
  // Technology & Computing
  { id: 'computer-science', name: 'Computer Science', count: 189 },
  { id: 'software', name: 'Software Engineering', count: 145 },
  { id: 'data-science', name: 'Data Science', count: 167 },
  { id: 'cyber-security', name: 'Cyber Security', count: 123 },
  { id: 'ai', name: 'Artificial Intelligence', count: 98 },
  
  // Engineering
  { id: 'mechanical', name: 'Mechanical Engineering', count: 167 },
  { id: 'electrical', name: 'Electrical Engineering', count: 154 },
  { id: 'civil', name: 'Civil Engineering', count: 145 },
  { id: 'chemical', name: 'Chemical Engineering', count: 112 },
  { id: 'aerospace', name: 'Aerospace Engineering', count: 89 },
  
  // Healthcare & Medicine
  { id: 'medicine', name: 'Medicine (MBBS)', count: 156 },
  { id: 'nursing', name: 'Nursing', count: 178 },
  { id: 'pharmacy', name: 'Pharmacy', count: 112 },
  { id: 'dentistry', name: 'Dentistry', count: 78 },
  { id: 'psychology', name: 'Psychology', count: 198 },
  { id: 'biomedical', name: 'Biomedical Sciences', count: 145 },
  
  // Sciences
  { id: 'biology', name: 'Biological Sciences', count: 167 },
  { id: 'chemistry', name: 'Chemistry', count: 145 },
  { id: 'physics', name: 'Physics', count: 134 },
  { id: 'mathematics', name: 'Mathematics', count: 156 },
  { id: 'environmental', name: 'Environmental Science', count: 123 },
  
  // Arts & Humanities
  { id: 'art-design', name: 'Art & Design', count: 134 },
  { id: 'english', name: 'English Literature', count: 145 },
  { id: 'history', name: 'History', count: 167 },
  { id: 'languages', name: 'Modern Languages', count: 123 },
  { id: 'philosophy', name: 'Philosophy', count: 89 },
  
  // Social Sciences
  { id: 'law', name: 'Law', count: 189 },
  { id: 'politics', name: 'Politics & International Relations', count: 156 },
  { id: 'sociology', name: 'Sociology', count: 134 },
  { id: 'education', name: 'Education', count: 167 },
  { id: 'social-work', name: 'Social Work', count: 112 },
  
  // Media & Communications
  { id: 'media', name: 'Media & Communications', count: 145 },
  { id: 'journalism', name: 'Journalism', count: 98 },
  { id: 'film', name: 'Film & Television', count: 87 },
  
  // Specialized Fields
  { id: 'architecture', name: 'Architecture', count: 112 },
  { id: 'hospitality', name: 'Hospitality & Tourism', count: 89 },
  { id: 'sports-science', name: 'Sports Science', count: 134 },
  { id: 'agriculture', name: 'Agriculture & Forestry', count: 78 }
];

interface SubjectFilterProps {
  selectedSubject: string;
  onChange: (subject: string) => void;
}

export function SubjectFilter({ selectedSubject, onChange }: SubjectFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Subject Areas</h3>
      </div>
      <div className="space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
        {subjects.map((subject) => (
          <label
            key={subject.id}
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer group"
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="subject"
                value={subject.id}
                checked={selectedSubject === subject.id}
                onChange={() => onChange(subject.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                {subject.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">({subject.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
}