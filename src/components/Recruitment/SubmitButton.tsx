import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-md 
        hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:ring-offset-2 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
    >
      {isSubmitting ? 'Submitting...' : 'Submit Application'}
    </button>
  );
}