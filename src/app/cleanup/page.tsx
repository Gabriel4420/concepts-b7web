"use client";
import { GeometryForm } from "@/components/Geometry";
import { useState } from "react";

const CleanUp = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <button className="bg-slate-600 font-bold text-4xl hover:bg-slate-900 py-3 px-3 rounded-lg text-white" onClick={() => setShow(!show)}>
        Mostrar/Ocultar
      </button>
      {show && <GeometryForm text="abc" />}
    </div>
  );
};

export default CleanUp;
