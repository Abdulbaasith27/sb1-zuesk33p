import React from 'react';

export function ResumeUpload() {
  return (
    <div>
      <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
        Resume/CV (PDF or Word document)
      </label>
      <input
        type="file"
        name="resume"
        id="resume"
        accept=".pdf,.doc,.docx"
        required
        className="mt-1 block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-indigo-50 file:text-indigo-700
          hover:file:bg-indigo-100
          transition-colors"
      />
      <p className="mt-1 text-sm text-gray-500">
        Maximum file size: 5MB. Accepted formats: PDF, DOC, DOCX
      </p>
    </div>
  );
}