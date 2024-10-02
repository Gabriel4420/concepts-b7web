"use client";
import RoundInput from "@/components/Input";
import { FormEvent } from "react";

function Prevent() {
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Opa, mandando...");
  };

  return (
    <div className="h-screen bg-gradient-to-tr to-slate-500 from-slate-800 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white mb-3">Login</h1>
      <div className="w-1/2 bg-slate-400 py-2 px-5 rounded-3xl shadow-2xl">
        <form className="rounded-3xl w-full" onSubmit={handleFormSubmit}>
          <RoundInput label="Insira seu e-mail" isSearchOrSender="sender" />
          <button
            className="rounded-lg my-5 py-2 px-5 bg-slate-700 hover:bg-slate-900 text-white"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Prevent;
