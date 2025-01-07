export interface SearchFilters {
  subject: string;
  level: string;
  university: string;
  location: string;
  intake: string;
  year: string;
  searchTerm: string;
}

export interface Course {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  requirements: string[];
  careers: string[];
  universities: string[];
  fees?: string;
  startDate?: string;
}