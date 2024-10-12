"use client";

import RoundInput from "@/components/Input";
import { useEffect, useState } from "react";

const Effect: React.FC = () => {
  const [name, setName] = useState("Gabriel");
  useEffect(() => console.log("Rodou o Effect"));
  const handleChangeName = (name: string) => {
    setName(name);
  };
  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <h2 className="text-center font-extralight text-6xl text-white">Meu nome é {name}</h2>
      <div className="w-1/2">
        <RoundInput
          isSearchOrSender="sender"
          placeholder="Digite seu nome"
          onChange={(e) => handleChangeName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Effect;
