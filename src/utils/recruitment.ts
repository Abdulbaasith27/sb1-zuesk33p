import { Job } from '../types/job';
import { compressFile } from './file';
import emailjs from '@emailjs/browser';
import { RECRUITMENT_EMAILJS_CONFIG } from '../config/emailjs';

export async function submitApplication(form: HTMLFormElement, job: Job) {
  const resumeFile = form.resume.files[0];
  if (!resumeFile) {
    throw new Error('Please attach your resume');
  }

  try {
    const compressedBase64 = await compressFile(resumeFile);

    const templateParams = {
      to_name: 'Celestial Career Connections HR',
      job_title: job.title,
      job_id: job.id,
      from_name: form.fullName.value,
      email: form.email.value,
      phone: form.phone.value,
      experience: form.experience.value || 'Not provided',
      cover_letter: form.coverLetter.value || 'Not provided',
      resume_data: compressedBase64,
      resume_name: resumeFile.name,
      resume_type: resumeFile.type
    };

    const result = await emailjs.send(
      RECRUITMENT_EMAILJS_CONFIG.SERVICE_ID,
      RECRUITMENT_EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      RECRUITMENT_EMAILJS_CONFIG.PUBLIC_KEY
    );

    if (result.status !== 200) {
      throw new Error('Failed to send application');
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to submit application');
  }
}