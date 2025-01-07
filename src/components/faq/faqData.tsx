import React from 'react';

export const faqData = [
  {
    question: "What documents do I need to apply for a UK university?",
    answer: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Academic transcripts and certificates</li>
        <li>English language proficiency test results (IELTS, TOEFL, etc.)</li>
        <li>Personal statement</li>
        <li>CV/Resume</li>
        <li>Reference letters</li>
        <li>Passport copy</li>
      </ul>
    )
  },
  {
    question: "What is the UK Student Visa process?",
    answer: (
      <ul className="list-disc pl-4 space-y-2">
        <li>Receiving a Confirmation of Acceptance for Studies (CAS) from a UK university</li>
        <li>Applying for a student visa online</li>
        <li>Paying the visa fee and healthcare surcharge</li>
        <li>Attending a visa appointment</li>
        <li>Submitting biometric information</li>
        <li>Receiving your visa decision</li>
      </ul>
    )
  },
  {
    question: "What are the English language requirements?",
    answer: "Most universities require an IELTS score of 6.0 or higher. Some may accept TOEFL, PTE, or other tests. Requirements can vary by course and university."
  },
  {
    question: "Can I work while studying in the UK?",
    answer: "Yes, Student visa holders can work part-time for up to 20 hours per week during term time and full-time during holidays."
  },
  {
    question: "How long does it take to get a student visa?",
    answer: "The standard processing time for a UK student visa is 3 weeks after your appointment. We recommend applying at least 3 months before your course start date."
  }
];