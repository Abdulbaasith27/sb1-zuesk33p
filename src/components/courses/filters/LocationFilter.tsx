import React from 'react';
import { MapPin } from 'lucide-react';

const regions = [
  { id: 'any', name: 'Any Location' },
  { id: 'london', name: 'London' },
  { id: 'manchester', name: 'Manchester' },
  { id: 'north-england', name: 'North England' },
  { id: 'central-england', name: 'Central England' },
  { id: 'south-england', name: 'South England' },
  { id: 'scotland', name: 'Scotland' },
  { id: 'wales', name: 'Wales' },
  { id: 'east-england', name: 'East England' },
  { id: 'northern-ireland', name: 'Northern Ireland' },
  { id: 'ireland', name: 'Ireland' }
];

interface LocationFilterProps {
  selectedLocation: string;
  onChange: (location: string) => void;
}

export function LocationFilter({ selectedLocation, onChange }: LocationFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-900">Location</h3>
      </div>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {regions.map((region) => (
          <label
            key={region.id}
            className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer group w-full"
          >
            <div className="flex items-center flex-1">
              <input
                type="radio"
                name="location"
                value={region.id}
                checked={selectedLocation === region.id}
                onChange={() => onChange(region.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700 group-hover:text-gray-900">
                {region.name}
              </span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}