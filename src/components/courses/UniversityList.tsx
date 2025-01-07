import React from 'react';
import { Building2 } from 'lucide-react';

const universities = [
  'University of Oxford',
  'University of Cambridge',
  'Imperial College London',
  'University College London (UCL)',
  'University of Edinburgh',
  "King's College London",
  'University of Manchester',
  'University of Birmingham'
];

export function UniversityList() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <Building2 className="w-6 h-6 text-purple-600" />
        <h3 className="text-xl font-semibold text-gray-900">Top UK Universities</h3>
      </div>
      <ul className="space-y-3">
        {universities.map((university) => (
          <li key={university} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-600 rounded-full" />
            <span className="text-gray-700">{university}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}