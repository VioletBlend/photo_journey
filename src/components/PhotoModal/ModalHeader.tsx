import React from 'react';
import { X } from 'lucide-react';

interface ModalHeaderProps {
  onClose: () => void;
}

export default function ModalHeader({ onClose }: ModalHeaderProps) {
  return (
    <div className="absolute top-8 right-8 z-10">
      <button
        onClick={onClose}
        className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}