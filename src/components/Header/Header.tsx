import React from 'react';
import Logo from './Logo';
import AddPhotoButton from './AddPhotoButton';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Logo />
          <AddPhotoButton />
        </div>
      </div>
    </header>
  );
}