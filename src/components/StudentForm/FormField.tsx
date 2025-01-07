import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export function FormField({ label, name, type = 'text', required = true, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          id={name}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
          required={required}
        />
      )}
    </div>
  );
}