import {
  CountContextType,
  CountProviderProps,
} from "@/types/contexts/OnlineContextType";
import { createContext, useState } from "react";

export const onlineCTX = createContext<CountContextType | null>(null);
export const CountProvider = ({ children }: CountProviderProps) => {
  const [onlineCounter, setOnlineCounter] = useState(45);

  return (
    <onlineCTX.Provider value={{ onlineCounter, setOnlineCounter }}>
      {children}
    </onlineCTX.Provider>
  );
};
