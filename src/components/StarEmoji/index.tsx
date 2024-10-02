import React from 'react';

interface StarEmojiProps {
  number: number; // Prop para receber o número
}

const StarEmoji: React.FC<StarEmojiProps> = ({ number }) => {
  return (
    <div className="relative inline-flex items-center justify-center text-6xl">
      {/* Ícone de Estrela */}
      <span role="img" aria-label="star" className="text-yellow-500">
        ⭐
      </span>
      {/* Número dentro da estrela */}
      <span className="absolute text-white text-[20px] font-bold">
        {number}.0
      </span>
    </div>
  );
};

export default StarEmoji;
