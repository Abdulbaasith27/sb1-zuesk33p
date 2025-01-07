import React from 'react';
import { FormInput } from './FormInput';
import { FormTextArea } from './FormTextArea';
import { ResumeUpload } from './ResumeUpload';
import { SubmitButton } from './SubmitButton';

interface FormFieldsProps {
  isSubmitting: boolean;
}

export function FormFields({ isSubmitting }: FormFieldsProps) {
  return (
    <>
      <FormInput
        label="Full Name"
        name="fullName"
        type="text"
        required
      />
      
      <FormInput
        label="Email Address"
        name="email"
        type="email"
        required
      />
      
      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        required
      />
      
      <FormTextArea
        label="Relevant Experience (Optional)"
        name="experience"
        rows={3}
        required={false}
      />
      
      <FormTextArea
        label="Cover Letter (Optional)"
        name="coverLetter"
        rows={4}
        required={false}
      />
      
      <ResumeUpload />
      
      <SubmitButton isSubmitting={isSubmitting} />
    </>
  );
}