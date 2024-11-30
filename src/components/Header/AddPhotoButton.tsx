import React, { useRef, useState } from 'react';
import { ImagePlus, Loader2 } from 'lucide-react';
import { usePhotoStore } from '../../store/photoStore';
import { handleFileSelect } from '../../utils/fileHandlers';

export default function AddPhotoButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { photos, setPhotos } = usePhotoStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return;
    
    setIsLoading(true);
    try {
      const newPhotos = await handleFileSelect(event.target.files);
      if (newPhotos.length > 0) {
        setPhotos([...newPhotos, ...photos]);
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload photos. Please try again.');
    } finally {
      setIsLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isLoading}
        className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        ) : (
          <ImagePlus className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
        )}
        <span className="font-medium">
          {isLoading ? 'Uploading...' : 'Add Photos'}
        </span>
      </button>
    </>
  );
}