import React from 'react';
import { GraduationCap } from 'lucide-react';

const levels = [
  { id: 'foundation', name: 'Foundation Year', count: 89 },
  { id: 'undergraduate', name: 'Undergraduate', count: 567 },
  { id: 'postgraduate', name: 'Postgraduate', count: 678 },
  { id: 'phd', name: 'PhD', count: 234 },
  { id: 'diploma', name: 'Diploma', count: 123 }
];

interface LevelFilterProps {
  selectedLevel: string;
  onChange: (level: string) => void;
}

export function LevelFilter({ selectedLevel, onChange }: LevelFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Study Level</h3>
      </div>
      <div className="space-y-2">
        {levels.map((level) => (
          <label
            key={level.id}
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer group"
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="level"
                value={level.id}
                checked={selectedLevel === level.id}
                onChange={() => onChange(level.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                {level.name}
              </span>
            </div>
            <span className="text-sm text-gray-500">({level.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
}