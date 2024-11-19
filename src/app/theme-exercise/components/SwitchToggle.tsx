"use client";
import { useTheme } from "@/contexts/ThemeContext";
import React, { ButtonHTMLAttributes, FC, useContext } from "react";

// import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  cta: string;
}

const SwitchToggle: FC<ButtonProps> = ({ cta }) => {
  const ctx = useTheme();
  return (
    <div className="w-1/2 fixed top-0 left-0 right-0 flex items-center justify-center p-10">
      <button
        className={`text-center cursor-pointer px-3 capitalize  ${
          ctx?.theme === "light"
            ? "border border-black border-spacing-2 text-black"
            : "border border-white border-spacing-2 text-white"
        } rounded-md`}
        onClick={() => ctx?.setTheme(ctx.theme === "light" ? "dark" : "light")}
      >
        {cta}
      </button>
    </div>
  );
};

export default SwitchToggle;
