import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          Contact Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Office Location</h3>
                <p className="text-gray-600">Leicester, United Kingdom</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <a 
                  href="tel:+447917371692"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +44 791 737 1692
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <a 
                  href="mailto:celestial_career_connections@outlook.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors block"
                >
                  celestial_career_connections@outlook.com
                </a>
                <a 
                  href="mailto:celestialcareerconnections@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  celestialcareerconnections@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                <p className="text-gray-600">Monday to Saturday: 9:00 AM - 7:00 PM (UK Time)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Consultation</h3>
            <p className="text-gray-600 mb-6">
              Schedule a free consultation with our expert advisors to discuss your educational and career goals.
            </p>
            <a
              href="#enquiry"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Schedule Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}