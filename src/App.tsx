import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Music } from 'lucide-react';
import BookCover from './components/BookCover';
import LetterPage from './components/LetterPage';
import PhotoGallery from './components/PhotoGallery';
import FinalPage from './components/FinalPage';
import MusicPlayer from './components/MusicPlayer';
import { couplePhotos, girlPhotos } from './data/photos';

export default function App() {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  
  const totalPages = 4;

  const handleOpenBook = () => {
    setIsBookOpen(true);
    setIsMusicPlaying(true);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
  };

  const renderContent = () => {
    if (!isBookOpen) {
      return <BookCover onOpenBook={handleOpenBook} />;
    }

    switch (currentPage) {
      case 0:
        return (
          <div className="text-center p-6 space-y-4">
            <h2 className="text-2xl font-script text-rose-600">Feliz dia dos Namorados meu amooorrr,</h2>
            <p className="font-script text-lg">
              Espero que goste meu bem, eu queria muito estar aí. Aqui guardo minhas palavras 
              e nossos momentos mais preciosos.
            </p>
            <Heart className="mx-auto text-rose-500" size={32} />
          </div>
        );
      case 1:
        return <LetterPage />;
      case 2:
        return <PhotoGallery 
          photos={couplePhotos} 
          title="Nossas Memórias Juntos" 
        />;
      case 3:
        return <PhotoGallery 
          photos={girlPhotos} 
          title="Minha Obra de Arte Favorita" 
        />;
      case 4:
        return <FinalPage />;
      default:
        return <FinalPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-rose-200 flex flex-col items-center justify-center p-4">
      <MusicPlayer isPlaying={isMusicPlaying} />
      
      {isBookOpen && (
        <button 
          onClick={toggleMusic} 
          className="fixed top-4 right-4 p-2 rounded-full bg-white/80 shadow-md hover:bg-white/90 transition-colors z-10"
        >
          <Music size={20} className={isMusicPlaying ? "text-rose-500" : "text-gray-400"} />
        </button>
      )}

      <div className={`w-full max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-700 ease-in-out ${isBookOpen ? 'min-h-[70vh]' : 'min-h-[50vh]'}`}>
        <div className="relative h-full">
          <div className="p-6 min-h-[60vh]">
            {renderContent()}
          </div>
          
          {isBookOpen && (
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-20 z-20">
              {currentPage > 0 && (
                <button 
                  onClick={handlePrevPage}
                  className="p-3 rounded-full bg-white shadow-lg hover:bg-rose-50 transition-colors group"
                >
                  <ChevronLeft size={24} className="text-rose-600 group-hover:scale-110 transition-transform" />
                </button>
              )}
              
              {currentPage < totalPages && (
                <button 
                  onClick={handleNextPage}
                  className="p-3 rounded-full bg-white shadow-lg hover:bg-rose-50 transition-colors group"
                >
                  <ChevronRight size={24} className="text-rose-600 group-hover:scale-110 transition-transform" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {isBookOpen && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(totalPages + 1)].map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 rounded-full ${currentPage === index ? 'bg-rose-500' : 'bg-rose-300'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
