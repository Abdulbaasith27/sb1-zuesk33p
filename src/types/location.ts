export interface Region {
  id: string;
  name: string;
}

export interface LocationFilterProps {
  selectedLocation: string;
  onChange: (location: string) => void;
}