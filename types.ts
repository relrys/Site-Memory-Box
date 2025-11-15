

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

export interface User {
    id: string;
    name: string;
    email: string;
    subscription?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderItem extends CartItem {}

export interface Order {
  id: string;
  userId: string;
  userName: string;
  items: OrderItem[];
  total: number;
  date: string; // ISO string
}