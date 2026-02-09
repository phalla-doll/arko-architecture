export interface Project {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  large?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
  initial: string;
}