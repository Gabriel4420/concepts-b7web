"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React, { ButtonHTMLAttributes, FC, useContext } from "react";

// import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cta: string;
}

const Button: FC<ButtonProps> = ({ cta }) => {
  const themeCtx = useTheme();
  return (
    <button
      className={`border px-4 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black`}
      onClick={() => alert(themeCtx?.theme)}
    >
      {cta}
    </button>
  );
};

export default Button;
