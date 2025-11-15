
export interface Plan {
  name: string;
  price: string;
  photoCount: number;
  photoSize: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
