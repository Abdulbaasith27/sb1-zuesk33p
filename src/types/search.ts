export interface SearchFilters {
  category?: string;
  subject?: string;
  level?: string;
  location?: string;
  intake?: string;
  university?: string;
  keyword?: string;
}

export interface LocationData {
  name: string;
  cities: string[];
}

export interface CourseCategory {
  name: string;
  subjects: string[];
}

export interface CourseData {
  categories: CourseCategory[];
  levels: string[];
  intakes: string[];
}