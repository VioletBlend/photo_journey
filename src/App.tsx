import React from 'react';
import Header from './components/Header/Header';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal/PhotoModal';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PhotoGrid />
        <PhotoModal />
      </main>
    </div>
  );
}

export default App;