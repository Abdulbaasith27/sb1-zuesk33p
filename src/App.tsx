import React from 'react';
import Header from './components/Header';
import StudentForm from './components/StudentForm';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Recruitment from './components/Recruitment';
import SocialLinks from './components/SocialLinks';
import { TestimonialSection } from './components/testimonials/TestimonialSection';
import { CourseSection } from './components/courses/CourseSection';
import { FAQSection } from './components/faq/FAQSection';
import { ChatWidget } from './components/chat/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient bg-[length:200%_auto]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Students studying"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Gateway to UK Education
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Expert guidance for international students seeking quality education in the UK
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 
                     text-lg px-8 py-4 rounded-lg font-semibold text-white
                     shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]
                     transition-all duration-300 animate-gradient bg-[length:200%_auto]
                     hover:scale-105 transform border-2 border-yellow-300/30"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      <main>
        <AboutUs />
        <CourseSection />
        <TestimonialSection />
        <FAQSection />
        <section id="enquiry" className="py-16">
          <StudentForm />
        </section>
        <Recruitment />
        <ContactUs />
      </main>

      <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <SocialLinks />
            <p>© {new Date().getFullYear()} Celestial Career Connections. All rights reserved.</p>
            <p className="text-gray-400">
              Registered in England and Wales | British Council Accredited | ICEF Certified Educational Agent
            </p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}