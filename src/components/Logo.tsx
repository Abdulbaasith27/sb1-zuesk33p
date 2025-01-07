import React from 'react';
import { Rocket, Star, Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <div className="relative flex items-center justify-center w-14 h-14">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse-slow opacity-75"></div>
      <Rocket className="w-8 h-8 text-white absolute transform rotate-45" />
      <Star className="w-10 h-10 text-white/70 absolute animate-spin-slow" />
      <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-1 -right-1 animate-float" />
    </div>
  );
}