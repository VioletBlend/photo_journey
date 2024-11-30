import React from 'react';
import { Image } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image className="w-8 h-8 text-indigo-600" />
      <span className="text-2xl font-serif text-gray-900">Galerie</span>
    </div>
  );
}