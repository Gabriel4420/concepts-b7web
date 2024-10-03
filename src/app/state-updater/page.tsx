"use client";
import { useState } from "react";

const stateUpdater = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    //cascata de fila de modificações na tela
    setCount(count + 2)
    //pega o que ta na fila e adiciona 2
    setCount(c => c + 2);
    setCount(c => c + 2);
  };

  return (
    <div className="h-screen bg-gradient-to-tr to-slate-500 from-slate-900 gap-10 flex flex-col items-center justify-center">
        <h3 className="text-white text-6xl font-bold leading-tight">{count}</h3>
        <button onClick={handleBtnClick} className="bg-blue-500 rounded-md px-5 py-5 mt-5 text-white">+6</button>
    </div>
  );
};

export default stateUpdater;
