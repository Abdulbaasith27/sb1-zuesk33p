import React from 'react';
import { regions } from '../../../../data/locations/regions';
import { LocationFilterProps } from '../../../../types/location';
import { LocationFilterHeader } from './LocationFilterHeader';
import { LocationOption } from './LocationOption';

export function LocationFilter({ selectedLocation, onChange }: LocationFilterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <LocationFilterHeader />
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {regions.map((region) => (
          <LocationOption
            key={region.id}
            region={region}
            isSelected={selectedLocation === region.id}
            onSelect={onChange}
          />
        ))}
      </div>
    </div>
  );
}