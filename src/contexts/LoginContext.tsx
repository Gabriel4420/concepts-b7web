"use client";
import {
  LoginContextProps,
  LoginContextType,
} from "@/types/contexts/LoginContextTypes";
import { createContext, useState } from "react";

export const LoginCTX = createContext<LoginContextType | null>(null);
export const LoginProvider = ({ children }: LoginContextProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginCTX.Provider value={{ username, setUsername, password, setPassword }}>
      {children}
    </LoginCTX.Provider>
  );
};
