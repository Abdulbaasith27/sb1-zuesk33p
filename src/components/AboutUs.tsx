import React from 'react';
import { Award, Users, CheckCircle, Briefcase } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12">
          About Celestial Career Connections
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Celestial Career Connections is a premier educational consultancy and recruitment agency based in the UK, 
              dedicated to helping international students achieve their academic and professional goals. As a registered 
              company in the UK Companies House, we pride ourselves on our comprehensive range of services and our 
              commitment to excellence in both education consulting and professional recruitment.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">British Council Accredited</h3>
                  <p className="text-gray-600">Official British Council accredited education agency</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">ICEF Certified</h3>
                  <p className="text-gray-600">Certified ICEF educational agent</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Expert Advisors</h3>
                  <p className="text-gray-600">Qualified student advisors with British Council certification</p>
                </div>
              </div>

              <div className="flex items-start">
                <Briefcase className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Professional Recruitment</h3>
                  <p className="text-gray-600">Specialized in UK job placements and career development</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>University and Course Selection</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Application Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Visa Application Support</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Pre-departure Briefing</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Accommodation Assistance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Career Guidance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>UK Job Placement</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Professional Recruitment Services</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Post-arrival Support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}