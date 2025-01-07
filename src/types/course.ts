export interface Course {
  name: string;
  category: string;
  slug: string;
  description: string;
  duration: string;
  requirements: string[];
  careers: string[];
  universities: string[];
}

export interface CourseCategory {
  title: string;
  courses: Course[];
}