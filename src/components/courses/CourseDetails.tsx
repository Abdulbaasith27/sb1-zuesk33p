import React from 'react';
import { Clock, GraduationCap, Building2, Briefcase, X } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseDetailsProps {
  course: Course;
  onClose: () => void;
}

export function CourseDetails({ course, onClose }: CourseDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900">{course.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Course Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Entry Requirements
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Career Prospects */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Career Prospects
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.careers.map((career, index) => (
                  <li key={index}>{career}</li>
                ))}
              </ul>
            </div>

            {/* Universities */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                Universities Offering This Course
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {course.universities.map((uni, index) => (
                  <li key={index}>{uni}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => {
              onClose();
              document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Enquire About This Course
          </button>
        </div>
      </div>
    </div>
  );
}