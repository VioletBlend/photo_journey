import React from 'react';
import { X } from 'lucide-react';
import { usePhotoStore } from '../store/photoStore';

export default function PhotoModal() {
  const { selectedPhoto, setSelectedPhoto } = usePhotoStore();

  if (!selectedPhoto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative max-w-7xl mx-auto p-4">
        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full z-10"
        >
          <X className="w-5 h-5" />
        </button>
        <img
          src={selectedPhoto.url}
          alt={selectedPhoto.title}
          className="max-h-[90vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}