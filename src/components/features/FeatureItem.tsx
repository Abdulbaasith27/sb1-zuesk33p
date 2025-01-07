import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureItem({ Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <Icon className="h-6 w-6 text-blue-600 mt-1" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}