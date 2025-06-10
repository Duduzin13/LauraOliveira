import React, { useEffect, useRef } from 'react';

interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Using a local MP3 file
  const audioUrl = "/data/music/terminal.mp3";
  
  useEffect(() => {
    if (!audioRef.current) return;
    
    // Set volume to 30% for ambient music
    audioRef.current.volume = 0.3;
    
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Erro na reprodução do áudio:", error);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio 
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
      />
      <div className="text-xs text-rose-400 bg-white/80 px-2 py-1 rounded-full shadow-sm">
        ♫ Terminal (eu to morrendo de sdds)
      </div>
    </div>
  );
};

export default MusicPlayer;
