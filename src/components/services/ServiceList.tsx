import React from 'react';

const services = [
  'University and Course Selection',
  'Application Processing',
  'Visa Application Support',
  'Pre-departure Briefing',
  'Accommodation Assistance',
  'Career Guidance',
  'UK Job Placement',
  'Post-arrival Support'
] as const;

export function ServiceList() {
  return (
    <ul className="space-y-3 text-gray-600">
      {services.map((service) => (
        <li key={service}>• {service}</li>
      ))}
    </ul>
  );
}