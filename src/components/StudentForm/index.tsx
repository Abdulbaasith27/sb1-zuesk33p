import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { EMAILJS_CONFIG } from '../../config/emailjs';
import { FormField } from './FormField';
import { INTAKE_OPTIONS } from './constants';

export default function StudentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

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
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Student Enquiry Form
        </h2>
        
        <div className="space-y-6">
          <FormField label="Full Name" name="from_name" />
          <FormField label="Email Address" name="reply_to" type="email" />
          <FormField label="Phone Number" name="phone_number" type="tel" />
          <FormField label="Nationality" name="nationality" />
          <FormField label="Current Education Level" name="education_level" />
          <FormField label="Interested Course" name="course_interest" />
          <FormField label="Preferred University (Optional)" name="preferred_university" required={false} />
          
          <FormField label="Preferred Intake" name="intake">
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
          </FormField>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="visa_support"
              id="visa_support"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
            />
            <label htmlFor="visa_support" className="ml-2 block text-sm text-gray-700">
              I need visa application support
            </label>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Additional Message (Optional)
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
            ></textarea>
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