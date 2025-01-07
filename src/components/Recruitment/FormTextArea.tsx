import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
}

export function FormTextArea({ label, name, rows = 3, required = true }: FormTextAreaProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        required={required}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      />
    </div>
  );
}