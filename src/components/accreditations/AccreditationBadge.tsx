import React from 'react';

interface AccreditationBadgeProps {
  name: string;
  imageUrl: string;
}

export function AccreditationBadge({ name, imageUrl }: AccreditationBadgeProps) {
  return (
    <img 
      src={imageUrl}
      alt={name}
      className="h-12 w-auto object-contain"
    />
  );
}