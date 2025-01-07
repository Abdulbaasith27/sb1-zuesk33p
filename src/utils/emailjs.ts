import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_x6dv828',
  TEMPLATE_ID: 'template_qkicy4h',
  PUBLIC_KEY: 'GAspNbEk1vk4IHL5G'
} as const;

export const sendEnquiryEmail = async (formData: FormData) => {
  const templateParams = {
    to_name: 'Celestial Career Connections',
    from_name: formData.get('from_name'),
    reply_to: formData.get('reply_to'),
    phone_number: formData.get('phone_number'),
    course_interest: formData.get('course_interest'),
    intake: formData.get('intake'),
    visa_support: formData.get('visa_support') ? 'Yes' : 'No',
    message: formData.get('message') || 'No additional message',
  };

  return emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams,
    EMAILJS_CONFIG.PUBLIC_KEY
  );
};