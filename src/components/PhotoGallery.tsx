import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  title: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextPhoto = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevPhoto = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
      setIsTransitioning(false);
    }, 300);
  };

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-500 italic">Adicione suas fotos para ver esta galeria</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl text-rose-600 mb-2 text-center font-script">{title}</h2>
      
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        {/* Photo display */}
        <div 
          className={`relative w-full h-full flex items-center justify-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
        >
          <img 
            src={photos[currentIndex].url} 
            alt={photos[currentIndex].alt}
            className="object-contain max-h-[40vh] max-w-full rounded-lg shadow-md"
          />
        </div>
        
        {/* Navigation buttons */}
        {photos.length > 1 && (
          <>
            <button 
              onClick={prevPhoto}
              className="absolute left-0 p-1 bg-white/70 rounded-full shadow-md hover:bg-white/90 transition-colors z-10"
              disabled={isTransitioning}
            >
              <ChevronLeft size={24} className="text-rose-600" />
            </button>
            
            <button 
              onClick={nextPhoto}
              className="absolute right-0 p-1 bg-white/70 rounded-full shadow-md hover:bg-white/90 transition-colors z-10"
              disabled={isTransitioning}
            >
              <ChevronRight size={24} className="text-rose-600" />
            </button>
          </>
        )}
      </div>
      
      {/* Photo indicators */}
      {photos.length > 1 && (
        <div className="flex justify-center space-x-2 mt-2">
          {photos.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-rose-500' : 'bg-rose-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;