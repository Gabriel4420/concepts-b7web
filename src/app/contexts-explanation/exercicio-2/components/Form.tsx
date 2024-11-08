'use client'
import RoundInput from "@/components/Input";
import { LoginCTX } from "@/contexts/LoginContext";
import { useContext } from "react";

export const Form = () => {
    const ctx = useContext(LoginCTX)
  return (
    <div className="px-4 py-2 flex flex-col gap-4 w-full">
      <RoundInput
        isSearchOrSender="sender"
        placeholder="Digite o nome de usuário"
        onChange={(e) => ctx?.setUsername(e.target.value)}
        value={ctx?.username}
      />
      <RoundInput
        isSearchOrSender="sender"
        placeholder="Digite a senha"
        onChange={(e) => ctx?.setPassword(e.target.value)}
        value={ctx?.password}
      />
    </div>
  );
};
