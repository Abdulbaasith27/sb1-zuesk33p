import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const INTAKE_OPTIONS = [
  'January 2025',
  'March 2025',
  'May 2025',
  'June 2025',
  'July 2025',
  'September 2025',
  'January 2026',
  'March 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'September 2026'
];

export default function StudentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      // Log form data for debugging
      const formData = new FormData(formRef.current);
      console.log('Form data:', Object.fromEntries(formData));

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        toast.success('Thank you for your enquiry! We will contact you soon.');
        formRef.current.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error('Failed to submit enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Toaster position="top-center" />
      <form ref={formRef} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl border border-blue-100">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Student Enquiry Form</h2>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Interested Course</label>
            <input
              type="text"
              name="course"
              id="course"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="intake" className="block text-sm font-medium text-gray-700">Preferred Intake</label>
            <select
              name="intake"
              id="intake"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
              required
            >
              <option value="">Select Intake</option>
              {INTAKE_OPTIONS.map((intake) => (
                <option key={intake} value={intake}>
                  {intake}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="visa_support"
              id="visa_support"
              value="yes"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
            />
            <label htmlFor="visa_support" className="ml-2 block text-sm text-gray-700">
              I need visa application support
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all animate-gradient bg-[length:200%_auto] ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>
        </div>
      </form>
    </div>
  );
}