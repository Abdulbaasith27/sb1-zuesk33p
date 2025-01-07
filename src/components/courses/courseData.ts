import { CourseCategory } from '../../types/course';
import { slugify } from '../../utils/slugify';

export const courseCategories: CourseCategory[] = [
  {
    title: 'Undergraduate Courses',
    courses: [
      {
        name: 'Business & Management',
        category: 'Undergraduate Courses',
        slug: slugify('Business & Management'),
        description: 'Develop essential business skills and knowledge for a successful career in management. This course covers key areas including marketing, finance, operations, and strategy.',
        duration: '3 years full-time',
        requirements: [
          'BBB at A-Level or equivalent',
          'IELTS 6.5 with no component below 6.0',
          'GCSE Mathematics and English at grade C/4 or above'
        ],
        careers: [
          'Business Consultant',
          'Marketing Manager',
          'Financial Analyst',
          'Project Manager',
          'Entrepreneur'
        ],
        universities: [
          'University of Manchester',
          'University of Warwick',
          'Lancaster University',
          'University of Leeds'
        ]
      },
      {
        name: 'Computer Science',
        category: 'Undergraduate Courses',
        slug: slugify('Computer Science'),
        description: 'Study the principles of computing and develop practical skills in software development, algorithms, and computer systems.',
        duration: '3 years full-time',
        requirements: [
          'ABB at A-Level including Mathematics',
          'IELTS 6.0 with no component below 5.5',
          'GCSE Mathematics and English at grade B/6 or above'
        ],
        careers: [
          'Software Developer',
          'Systems Analyst',
          'Data Scientist',
          'Cybersecurity Specialist',
          'AI Engineer'
        ],
        universities: [
          'Imperial College London',
          'University of Manchester',
          'University of Bristol',
          'University of Southampton'
        ]
      }
    ]
  },
  {
    title: 'Postgraduate Courses',
    courses: [
      {
        name: 'MBA (Master of Business Administration)',
        category: 'Postgraduate Courses',
        slug: slugify('MBA'),
        description: 'Advanced business degree covering leadership, strategy, finance, and organizational management.',
        duration: '1 year full-time',
        requirements: [
          'Good undergraduate degree (2:1 or above)',
          'Minimum 3 years work experience',
          'IELTS 7.0 with no component below 6.5',
          'GMAT score of 600+'
        ],
        careers: [
          'Senior Management',
          'Management Consultant',
          'Investment Banker',
          'Strategy Director',
          'Entrepreneur'
        ],
        universities: [
          'London Business School',
          'University of Oxford',
          'University of Cambridge',
          'Imperial College London'
        ]
      },
      {
        name: 'MSc Data Science',
        category: 'Postgraduate Courses',
        slug: slugify('MSc Data Science'),
        description: 'Advanced study of data analysis, machine learning, and statistical methods.',
        duration: '1 year full-time',
        requirements: [
          'Good undergraduate degree in related field',
          'Strong mathematics background',
          'IELTS 6.5 with no component below 6.0',
          'Programming experience preferred'
        ],
        careers: [
          'Data Scientist',
          'Machine Learning Engineer',
          'Business Intelligence Analyst',
          'Research Scientist',
          'AI Specialist'
        ],
        universities: [
          'University College London',
          'University of Edinburgh',
          'University of Manchester',
          'University of Bristol'
        ]
      }
    ]
  }
];

export const universityGroups = [
  {
    title: 'Russell Group Universities',
    universities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London',
      'London School of Economics',
      'University of Edinburgh',
      'University of Manchester',
      "King's College London"
    ]
  },
  {
    title: 'Other Top Universities',
    universities: [
      'University of Bath',
      'University of Surrey',
      'Loughborough University',
      'University of East Anglia',
      'University of Essex',
      'Brunel University London',
      'City, University of London',
      'Aston University'
    ]
  }
];