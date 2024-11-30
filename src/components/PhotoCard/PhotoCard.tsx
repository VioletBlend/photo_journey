import React from 'react';
import { Photo } from '../../types/Photo';
import { usePhotoStore } from '../../store/photoStore';
import PhotoInfo from './PhotoInfo';
import PhotoActions from './PhotoActions';

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  const { setSelectedPhoto, deletePhoto } = usePhotoStore();
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="relative group mb-8 cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={photo.url}
          alt={photo.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>
      {isLoaded && (
        <>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          <PhotoActions onView={setSelectedPhoto} onDelete={deletePhoto} photo={photo} />
          <PhotoInfo photo={photo} />
        </>
      )}
    </div>
  );
}