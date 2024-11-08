import { ReactNode } from "react";

export type CountContextType = {
    onlineCounter: number;
    setOnlineCounter: (n: number) => void;
  };
  
export type CountProviderProps = { children: ReactNode };