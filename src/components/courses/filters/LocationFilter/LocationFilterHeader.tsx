import React from 'react';
import { MapPin } from 'lucide-react';

export function LocationFilterHeader() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <MapPin className="w-5 h-5 text-blue-600" />
      <h3 className="font-semibold text-gray-900">Location</h3>
    </div>
  );
}