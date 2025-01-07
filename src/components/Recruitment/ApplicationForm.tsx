import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { Job } from '../../types/job';
import { FormFields } from './FormFields';
import { submitApplication } from '../../utils/recruitment';

interface ApplicationFormProps {
  job: Job;
  onClose: () => void;
}

export default function ApplicationForm({ job, onClose }: ApplicationFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formRef.current) return;
      await submitApplication(formRef.current, job);
      toast.success('Application submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Application error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Apply for {job.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <FormFields isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>
    </div>
  );
}