"use client";

import { CustomButton } from "@/components/CustomButton";
import RoundInput from "@/components/Input";
import { ChangeEvent, useState } from "react";

function Eventos() {
  const handleClique = () => {
    const timeout = setTimeout(() => alert("Deu bom!"), 2000);
    setTimeout(() => clearTimeout(timeout), 3000);
  };

  const [message, setMessage] = useState("");

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-full">
        <div className="w-3/3 mb-5  ">
          <RoundInput
            isSearchOrSender="sender"
            placeholder="Digite uma mensagem ..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setMessage(e.target.value)
            }
          />
        </div>

        <button
          onClick={handleClique}
          onDoubleClick={() => alert("Funcionou 2")}
          className="py-5 px-5 bg-slate-500 leading-tight font-bold text-lg text-white rounded-3xl hover:bg-slate-800"
        >
          Clique me
        </button>
        <CustomButton onClick={() => alert(message)} message={message} colorButton={"blue"} />
      </div>
    </div>
  );
}

export default Eventos;
