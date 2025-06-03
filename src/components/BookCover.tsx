import React from 'react';
import { BookOpen, Heart } from 'lucide-react';

interface BookCoverProps {
  onOpenBook: () => void;
}

const BookCover: React.FC<BookCoverProps> = ({ onOpenBook }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-8">
      <div className="animate-float">
        <Heart className="text-rose-500 mx-auto\" size={48} fill="#f43f5e" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-script text-rose-600 tracking-wide">
        Memórias de Amor
      </h1>
      
      <p className="text-rose-700 italic max-w-xs mx-auto">
        Um livro de memórias para guardar nossos momentos mais especiais
      </p>
      
      <button 
        onClick={onOpenBook}
        className="mt-8 px-6 py-3 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300 flex items-center space-x-2 group"
      >
        <BookOpen size={20} className="group-hover:animate-pulse" />
        <span>Abrir o Livro</span>
      </button>
    </div>
  );
};

export default BookCover;