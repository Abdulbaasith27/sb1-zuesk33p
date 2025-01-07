import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    text: "Thanks to Celestial Connections, I got into my dream university in the UK. The team guided me every step of the way!",
    author: "Aishwarya R.",
    course: "MSc Data Science"
  },
  {
    text: "The entire process was so smooth! They helped me with my visa application and course selection.",
    author: "Rahul K.",
    course: "MBA Business Administration"
  },
  {
    text: "Celestial Connections is the best consultancy for Indian students. Highly recommended!",
    author: "Priya M.",
    course: "BA Media Studies"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          What Our Students Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}