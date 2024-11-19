'use client'
import { useTheme } from "@/contexts/ThemeContext";
import { ContainerProps } from "@/types/Container";
import { FC } from "react";

export const Container: FC<ContainerProps> = ({ children }) => {
  const themeCtx = useTheme();

  return (
    <div
      className={`h-screen w-full bg-gradient-to-tr to-white from-slate-200 text-slate-800 dark:to-slate-500 dark:from-slate-900 dark:text-white  gap-10 flex flex-col items-center justify-center`}
    >
      <div className="container mx-auto">
        <p className="text-base">Tema: <b>{themeCtx?.theme}</b></p>
        {children}</div>
    </div>
  );
};
