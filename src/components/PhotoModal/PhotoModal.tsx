import React from 'react';
import { X, Download, Share2, Trash2 } from 'lucide-react';
import { usePhotoStore } from '../../store/photoStore';
import ModalHeader from './ModalHeader';

export default function PhotoModal() {
  const { selectedPhoto, setSelectedPhoto, deletePhoto } = usePhotoStore();

  if (!selectedPhoto) return null;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      deletePhoto(selectedPhoto.id);
      setSelectedPhoto(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedPhoto(null)} />
      <div className="relative max-w-7xl w-full mx-auto p-4">
        <ModalHeader onClose={() => setSelectedPhoto(null)} />
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
            className="max-h-[85vh] w-auto mx-auto object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <h2 className="text-white text-xl font-medium mb-2">{selectedPhoto.title}</h2>
            {selectedPhoto.description && (
              <p className="text-white/80">{selectedPhoto.description}</p>
            )}
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button 
                onClick={handleDelete}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/60 hover:bg-red-500/80 rounded-full text-white transition-colors ml-auto"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}