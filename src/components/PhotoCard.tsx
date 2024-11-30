import React from 'react';
import { Maximize2 } from 'lucide-react';
import { Photo } from '../types/Photo';
import { usePhotoStore } from '../store/photoStore';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const { setSelectedPhoto } = usePhotoStore();

  return (
    <div className="relative group mb-4 cursor-pointer overflow-hidden rounded-lg">
      <img
        src={photo.url}
        alt={photo.title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
        <button
          onClick={() => setSelectedPhoto(photo)}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-white rounded-full"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-medium">{photo.title}</h3>
      </div>
    </div>
  );
}