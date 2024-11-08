import { HeaderProperties } from "@/types/HeaderProperties";
import React from "react";

export const Header: React.FC<HeaderProperties> = ({ title }) => {
  return (
    <header className="flex w-full space-between bg-slate-800 h-20 absolute top-0 items-center px-5 ">
      <h1 className="text-3xl text-white">{title}</h1>
    </header>
  );
};
