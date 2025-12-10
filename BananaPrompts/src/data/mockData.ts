export interface MediaItem {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  likes: number;
  category: string;
}

export const imageGallery: MediaItem[] = [
  {
    id: 'img-1',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&auto=format&fit=crop',
    title: 'Cosmic Dreams',
    author: 'AI Artist',
    likes: 1234,
    category: 'abstract',
  },
  {
    id: 'img-2',
    imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop',
    title: 'Neon City',
    author: 'CyberMind',
    likes: 892,
    category: 'cyberpunk',
  },
  {
    id: 'img-3',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
    title: 'Digital Nature',
    author: 'PixelMaster',
    likes: 756,
    category: 'nature',
  },
  {
    id: 'img-4',
    imageUrl: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=800&auto=format&fit=crop',
    title: 'Future Horizons',
    author: 'AIVision',
    likes: 1543,
    category: 'landscape',
  },
  {
    id: 'img-5',
    imageUrl: 'https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?w=800&auto=format&fit=crop',
    title: 'Abstract Reality',
    author: 'DreamWeaver',
    likes: 623,
    category: 'abstract',
  },
  {
    id: 'img-6',
    imageUrl: 'https://images.unsplash.com/photo-1683009427666-340595e57e43?w=800&auto=format&fit=crop',
    title: 'Crystal Worlds',
    author: 'VisionAI',
    likes: 987,
    category: 'fantasy',
  },
  {
    id: 'img-7',
    imageUrl: 'https://images.unsplash.com/photo-1681412332858-4e58dc3a3b97?w=800&auto=format&fit=crop',
    title: 'Electric Dreams',
    author: 'NeonMind',
    likes: 1102,
    category: 'cyberpunk',
  },
  {
    id: 'img-8',
    imageUrl: 'https://images.unsplash.com/photo-1699116548123-7917b0f0e799?w=800&auto=format&fit=crop',
    title: 'Ocean Depths',
    author: 'DeepBlue',
    likes: 834,
    category: 'nature',
  },
];

export const videoGallery: MediaItem[] = [
  {
    id: 'vid-1',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop',
    title: 'Dancing Particles',
    author: 'MotionAI',
    likes: 2341,
    category: 'motion',
  },
  {
    id: 'vid-2',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop',
    title: 'Gradient Flow',
    author: 'FluidMind',
    likes: 1876,
    category: 'abstract',
  },
  {
    id: 'vid-3',
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&auto=format&fit=crop',
    title: 'Color Explosion',
    author: 'ChromaAI',
    likes: 1543,
    category: 'colorful',
  },
  {
    id: 'vid-4',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&auto=format&fit=crop',
    title: 'Wave Motion',
    author: 'WaveGen',
    likes: 2102,
    category: 'motion',
  },
  {
    id: 'vid-5',
    imageUrl: 'https://images.unsplash.com/photo-1604076913837-52ab5629fba9?w=800&auto=format&fit=crop',
    title: 'Liquid Dreams',
    author: 'FlowAI',
    likes: 1234,
    category: 'abstract',
  },
  {
    id: 'vid-6',
    imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&auto=format&fit=crop',
    title: 'Neon Pulse',
    author: 'PulseGen',
    likes: 1678,
    category: 'neon',
  },
];
