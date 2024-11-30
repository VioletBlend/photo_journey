import React from 'react';
import { Maximize2, Trash2 } from 'lucide-react';
import { Photo } from '../../types/Photo';
import ActionButton from './ActionButton';

interface PhotoActionsProps {
  onView: (photo: Photo) => void;
  onDelete: (id: string) => void;
  photo: Photo;
}

export default function PhotoActions({ onView, onDelete, photo }: PhotoActionsProps) {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this photo?')) {
      onDelete(photo.id);
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 flex gap-2">
        <ActionButton
          onClick={() => onView(photo)}
          icon={<Maximize2 className="w-5 h-5 text-gray-900" />}
          className="bg-white/90 hover:bg-white"
          title="View photo"
        />
        <ActionButton
          onClick={handleDelete}
          icon={<Trash2 className="w-5 h-5 text-white" />}
          className="bg-red-500/90 hover:bg-red-500"
          title="Delete photo"
        />
      </div>
    </div>
  );
}