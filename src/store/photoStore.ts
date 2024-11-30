import { create } from 'zustand';
import { Photo } from '../types/Photo';

interface PhotoStore {
  photos: Photo[];
  selectedPhoto: Photo | null;
  setPhotos: (photos: Photo[]) => void;
  setSelectedPhoto: (photo: Photo | null) => void;
  addPhotos: (newPhotos: Photo[]) => void;
  deletePhoto: (id: string) => void;
}

// Curated collection of 30 beautiful Unsplash photos
const initialPhotos: Photo[] = [
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&w=1200&q=80',
    title: 'Sakura in Full Bloom',
    description: 'Cherry blossoms creating a natural tunnel in spring',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Majesty',
    description: 'Sunrise over misty mountain peaks',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&w=1200&q=80',
    title: 'Coastal Dreams',
    description: 'Waves crashing against dramatic cliffs at sunset',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682686581264-c47e25e61d95?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Geometry',
    description: 'Modern architecture creating fascinating patterns',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&w=1200&q=80',
    title: 'Desert Solitude',
    description: 'Sand dunes stretching to the horizon',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?auto=format&fit=crop&w=1200&q=80',
    title: 'Forest Mystique',
    description: 'Sunlight filtering through ancient trees',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685796014-2f342188a635?auto=format&fit=crop&w=1200&q=80',
    title: 'Arctic Wonder',
    description: 'Northern lights dancing in the polar sky',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?auto=format&fit=crop&w=1200&q=80',
    title: 'Autumn Colors',
    description: 'Fall foliage reflecting in still waters',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Night',
    description: 'City lights creating a mesmerizing nightscape',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&w=1200&q=80',
    title: 'Wildlife Portrait',
    description: 'A majestic lion in its natural habitat',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Tropical Paradise',
    description: 'Crystal clear waters and white sandy beaches',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Lake',
    description: 'Perfect reflection of mountains in alpine lake',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&w=1200&q=80',
    title: 'Desert Bloom',
    description: 'Rare wildflowers in an arid landscape',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Exploration',
    description: 'Hidden corners of the city reveal their secrets',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Winter Wonderland',
    description: 'Fresh snow covering a peaceful forest',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&w=1200&q=80',
    title: 'Waterfall Magic',
    description: 'Hidden waterfall in tropical rainforest',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?auto=format&fit=crop&w=1200&q=80',
    title: 'Sunset Silhouettes',
    description: 'Palm trees against a colorful sky',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685796014-2f342188a635?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Stream',
    description: 'Crystal clear water flowing over rocks',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?auto=format&fit=crop&w=1200&q=80',
    title: 'Desert Night',
    description: 'Stars over sand dunes',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Ocean Waves',
    description: 'Powerful waves at sunrise',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&w=1200&q=80',
    title: 'City Reflections',
    description: 'Urban architecture mirrored in still water',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Forest Path',
    description: 'Sunlit trail through ancient woods',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1200&q=80',
    title: 'Mountain Peak',
    description: 'Snow-capped summit touching the clouds',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?auto=format&fit=crop&w=1200&q=80',
    title: 'Autumn Road',
    description: 'Tree-lined path in fall colors',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687221038-404670f05144?auto=format&fit=crop&w=1200&q=80',
    title: 'Desert Sunset',
    description: 'Golden hour in the canyon',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695794947-17061dc284dd?auto=format&fit=crop&w=1200&q=80',
    title: 'Coastal Fog',
    description: 'Misty morning by the sea',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682687220509-61b8a906ca19?auto=format&fit=crop&w=1200&q=80',
    title: 'Urban Abstract',
    description: 'Modern architecture creating patterns',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?auto=format&fit=crop&w=1200&q=80',
    title: 'Spring Flowers',
    description: 'Wildflower meadow in bloom',
    width: 1200,
    height: 1600
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685796014-2f342188a635?auto=format&fit=crop&w=1200&q=80',
    title: 'Night Sky',
    description: 'Milky Way over mountain peaks',
    width: 1200,
    height: 800
  },
  {
    id: crypto.randomUUID(),
    url: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?auto=format&fit=crop&w=1200&q=80',
    title: 'Winter Forest',
    description: 'Snow-covered trees in morning light',
    width: 1200,
    height: 1600
  }
];

export const usePhotoStore = create<PhotoStore>((set) => ({
  photos: initialPhotos,
  selectedPhoto: null,
  setPhotos: (photos) => set({ photos }),
  setSelectedPhoto: (photo) => set({ selectedPhoto: photo }),
  addPhotos: (newPhotos) => set((state) => ({
    photos: [...newPhotos, ...state.photos]
  })),
  deletePhoto: (id) => set((state) => ({
    photos: state.photos.filter(photo => photo.id !== id),
    selectedPhoto: state.selectedPhoto?.id === id ? null : state.selectedPhoto
  })),
}));