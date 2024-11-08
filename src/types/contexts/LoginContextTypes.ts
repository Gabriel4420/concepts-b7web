import { ReactNode } from "react";

export type LoginContextType = {
  username: string;
  setUsername: (name: string) => void;
  password: string;
  setPassword: (pass: string) => void;
};

export type LoginContextProps = { children: ReactNode };
