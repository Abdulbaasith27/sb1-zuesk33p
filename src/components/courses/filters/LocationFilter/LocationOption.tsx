import React from 'react';
import { Region } from '../../../../types/location';

interface LocationOptionProps {
  region: Region;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function LocationOption({ region, isSelected, onSelect }: LocationOptionProps) {
  return (
    <label className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50 cursor-pointer group w-full">
      <div className="flex items-center flex-1">
        <input
          type="radio"
          name="location"
          value={region.id}
          checked={isSelected}
          onChange={() => onSelect(region.id)}
          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
        />
        <span className="ml-2 text-gray-700 group-hover:text-gray-900">
          {region.name}
        </span>
      </div>
    </label>
  );
}