import React, { useEffect } from "react";
interface GeometryProps {
  text:String;
  type?: 'Square' | 'Circle';
}

export const GeometryForm: React.FC<GeometryProps> = ({ text, type = 'Square' }: GeometryProps) => {
  useEffect( () => {
    console.log('Rodou o effect')

    return () => {
      console.log('Rodou o cleanup')
    }
  })

  return (
    <div className={`w-52 h-52 bg-orange-400 flex items-center justify-center ${type === 'Square'?'rounded-3xl' : type === 'Circle' && 'rounded-full'}`}>
      <h2 className="text-white text-3xl capitalize font-bold">{text}</h2>
    </div>
  );
};
