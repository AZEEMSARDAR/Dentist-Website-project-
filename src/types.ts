export type ActiveTab =
  | 'home'
  | 'about'
  | 'services'
  | 'dentists'
  | 'testimonials'
  | 'gallery'
  | 'financing'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'book'
  | 'admin';

export interface Service {
  id: string;
  name: string;
  category: 'general' | 'cosmetic' | 'specialty' | 'pediatric';
  description: string;
  benefits: string[];
  duration: string;
  priceEstimate: string;
  iconName: string;
}

export interface Dentist {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  education: string[];
  bio: string;
  avatar: string;
  availability: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  treatment: string;
  description: string;
  beforeUrl: string;
  afterUrl: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'insurance' | 'cosmetic' | 'orthodontics' | 'emergency';
}

export interface Appointment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  serviceId: string;
  dentistId: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  isUrgent: boolean;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'agent' | 'system';
  text: string;
  timestamp: string;
}
