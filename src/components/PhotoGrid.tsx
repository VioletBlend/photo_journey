import React from 'react';
import Masonry from 'react-masonry-css';
import { usePhotoStore } from '../store/photoStore';
import PhotoCard from './PhotoCard/PhotoCard';

const breakpointColumns = {
  default: 5,
  2560: 6,
  1920: 5,
  1536: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1
};

export default function PhotoGrid() {
  const { photos } = usePhotoStore();

  return (
    <div className="max-w-[2400px] mx-auto">
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </Masonry>
    </div>
  );
}