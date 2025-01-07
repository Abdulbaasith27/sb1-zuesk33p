import React, { useState } from 'react';
import { Menu, X, GraduationCap, Users, MessageSquare, HelpCircle } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'About Us', href: '#about', icon: <Users className="w-5 h-5" /> },
    { name: 'Courses', href: '#courses', icon: <GraduationCap className="w-5 h-5" /> },
    { name: 'Testimonials', href: '#testimonials', icon: <MessageSquare className="w-5 h-5" /> },
    { name: 'FAQ', href: '#faq', icon: <HelpCircle className="w-5 h-5" /> },
    { name: 'Contact', href: '#contact', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
              <Logo />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 whitespace-nowrap">
              Celestial Career Connections
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white px-3 py-2 font-medium transition-colors relative group flex items-center gap-2"
              >
                {item.icon}
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}