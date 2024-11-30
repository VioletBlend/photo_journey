import React from 'react';
import { Photo } from '../../types/Photo';

interface PhotoInfoProps {
  photo: Photo;
}

export default function PhotoInfo({ photo }: PhotoInfoProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
      <h3 className="text-white font-medium text-lg mb-1">{photo.title}</h3>
      {photo.description && (
        <p className="text-white/80 text-sm">{photo.description}</p>
      )}
    </div>
  );
}