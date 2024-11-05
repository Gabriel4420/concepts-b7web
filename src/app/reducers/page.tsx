"use client";

import RoundInput from "@/components/Input";
import { listReducer } from "@/reducers/listReducer";
import { PenIcon, Trash2 } from "lucide-react";
import { useReducer, useState } from "react";

const Reducer = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddfield] = useState("");
  const handleAddClick = () => {
    if (addField.trim() === "") {
      return false;
    }
    dispatch({ type: "add", payload: { text: addField.trim() } });

    setAddfield("");
  };

  const handleToggle = (id: number) => {
    dispatch({ type: "toggleDone", payload: { id } });
  };

  return (
    <div className="h-screen bg-gradient-to-tr to-slate-300 from-gray-800 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-white text-center font-bold uppercase text-5xl my-3">
        Lista de tarefas
      </h1>
      <div className="border rounded-md border-gray-400 p-4 my-4 w-1/2 flex items-center justify-center">
        <RoundInput
          placeholder="Digite uma tarefa"
          value={addField}
          onChange={(e) => setAddfield(e.target.value)}
          isSearchOrSender="sender"
          type="text"
        />
        <button
          onClick={handleAddClick}
          className="bg-slate-700 hover:bg-slate-800 text-lg uppercase text-white text-bold p-4 ml-6 rounded-md"
        >
          Adicionar
        </button>
      </div>
      <ul className="w-1/2 flex flex-col gap-4">
        {list.map((i) => (
          <li
            className="text-white text-3xl bg-slate-700 hover:bg-slate-900 w-full rounded-md py-4 px-5 capitalize flex items-center justify-between"
            key={i.id}
          >
            <div className={`flex items-center justify-center`}>
              <label className="checkbox-container mr-2 ">
                <input
                  type="checkbox"
                  checked={i.done}
                  onClick={() => handleToggle(i.id)}
                  className=" w-8 h-8 mr-3 cursor-pointer border-2 border-gray-500 rounded-sm  underline relative"
                />
                <span className={`text-white -mt-10 ${i.done ? "line-through" : ""}`}>
                  {i.text}
                </span>
              </label>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <button
                title="excluir"
                aria-label="excluir"
                className="bg-red-800 hover:bg-red-500 rounded-full py-2 px-2"
              >
                <Trash2 size={32} className="text-white" />
              </button>
              <button
                title="editar"
                aria-label="editar"
                className="bg-blue-800 hover:bg-blue-500 rounded-full py-2 px-2"
              >
                <PenIcon size={32} className="text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reducer;
