"use client";
import RoundInput from "@/components/Input";
import { handleAction } from "@/helper/handleAction";
import { Todoitem } from "@/types/TodoItem";
import React, { useEffect, useState } from "react";
import { FiPlusCircle, FiTrash } from "react-icons/fi";

// import { Container } from './styles';

const TodoList: React.FC = () => {
  const [list, setList] = useState<Array<Todoitem>>([
    { id: 1, label: "Fazer dever de casa", checked: true },
  ]);

  const [taskName, setTaskName] = useState("");

  return (
    <div className="h-screen bg-gradient-to-tr to-slate-500 from-slate-800 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-5 text-white">Lista de Tarefas</h1>
      <div className="flex w-full max-w-lg my-3 gap-4 p-4 rounded-full bg-gray-700 ">
        <RoundInput
          isSearchOrSender="search"
          type="text"
          placeholder="O que deseja fazer ?"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          onClick={() => handleAction("add",setList,list,taskName,setTaskName)}
          className="bg-slate-500 hover:bg-slate-900 flex gap-3 items-center rounded-full text-white py-2 px-5"
        >
          <FiPlusCircle size={20} className="text-white" /> Adicionar
        </button>
      </div>
      <ul className="w-full max-w-lg list-disc ">
        {list.map((value) => (
          <li
            className={`flex items-center mt-2 justify-between rounded-md px-3 py-2 gap-3 bg-white ${
              value.checked ? "line-through" : ""
            }`}
            key={value.id}
          >
            <input
              type="checkbox"
              checked={value.checked}
              className="h-6 w-6 mr-3 cursor-pointer"
              onChange={() => console.log('deu certo')}
              onClick={() => handleAction("update",setList,list,taskName,setTaskName, value.id)}
            />
            {value.label}
            <button
              className="hover:underline bg-red-400 hover:bg-red-600 py-2 px-4 cursor-pointer rounded-full flex items-center text-white"
              onClick={() => handleAction("remove",setList,list,taskName,setTaskName, value.id)}
            >
              <FiTrash size={20} className="text-white" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
