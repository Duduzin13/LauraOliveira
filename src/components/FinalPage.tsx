import React from 'react';
import { Heart } from 'lucide-react';

const FinalPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
      <Heart className="text-rose-500" size={48} fill="#f43f5e" />
      
      <h2 className="text-2xl font-script text-rose-600">Nosso Amor Continua...</h2>
      
      <p className="text-lg text-gray-700 max-w-xs mx-auto">
        Este é apenas o começo da nossa história, de até o pra sempre
      </p>
      
      <div className="mt-4">
        <p className="font-script text-xl text-rose-500">Eu te amo!</p>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>Feliz Dia dos Namorados</p>
      </div>
    </div>
  );
};

export default FinalPage;