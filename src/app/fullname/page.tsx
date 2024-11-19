"use client";

import RoundInput from "@/components/Input";
import { PersonAttributes } from "@/types/Person";
import { FC, useState } from "react";

const Fullname: FC = () => {
  const [fullName, setFullName] = useState<PersonAttributes>({
    name: "Gabriel",
    lastname: "Rodrigues perez",
    age: 18,
    alt: "asdfasdf",
    habilities: [{ name: "front dev" }],
    avatarPath: "",
  });
  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white drop-shadow-3xl">Nome Completo</h1>
      <div className="w-1/2 flex flex-col items-center gap-5">
        <RoundInput
          title="Name"
          isSearchOrSender="sender"
          value={fullName.name}
          onChange={(e) => setFullName({ ...fullName, name: e.target.value })}
        />
        <RoundInput
          title="Name"
          isSearchOrSender="sender"
          value={fullName.lastname}
          onChange={(e) =>
            setFullName({ ...fullName, lastname: e.target.value })
          }
        />
        <p className="font-bold text-white text-4xl py-5">
          Meu nome completo é:
        </p>
        <p className="font-bold text-white text-4xl">
          {fullName.name} {fullName.lastname}
        </p>

        <button
          className="bg-slate-900 text-white py-2 px-5 rounded-md border-none"
          onClick={() => setFullName({ alt: "", name: "", lastname: "" })}
        >
          Limpar tudo
        </button>
      </div>
    </div>
  );
};

export default Fullname;
