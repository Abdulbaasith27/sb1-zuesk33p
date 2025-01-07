import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
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
  );
}