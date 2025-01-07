import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://www.facebook.com/celestialcareerconnections"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Follow us on Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://www.instagram.com/celestial_career_connections/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Follow us on Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://www.linkedin.com/company/celestial-career-connections"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Follow us on LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/447917371692"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/80 hover:text-white transition-colors"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}