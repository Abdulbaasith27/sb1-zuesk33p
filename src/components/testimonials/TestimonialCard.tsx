import React from 'react';

interface TestimonialCardProps {
  text: string;
  author: string;
  course: string;
}

export function TestimonialCard({ text, author, course }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <p className="text-gray-600 italic mb-4">{text}</p>
      <div className="border-t pt-4">
        <h4 className="font-semibold text-gray-900">{author}</h4>
        <p className="text-sm text-gray-500">{course}</p>
      </div>
    </div>
  );
}