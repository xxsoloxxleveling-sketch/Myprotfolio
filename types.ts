export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  link?: string;
  image: string;
  size: 'large' | 'wide' | 'tall' | 'standard' | 'small';
}

export interface Award {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Emoji
}

export interface TechItem {
  name: string;
  category: 'code' | 'design';
}