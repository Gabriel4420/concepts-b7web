"use client";
import { listReducer } from "@/reducers/listReducer";
import { ListAction } from "@/types/reducers";
import { Dispatch, SetStateAction, useReducer, useState } from "react";

interface crudActions {
  list: any;
  dispatch: Dispatch<ListAction>;
  addField: string;
  setAddfield: Dispatch<SetStateAction<string>>;
  
}

export const actions = ({
  list,
  dispatch,
  addField,
  setAddfield,
}:crudActions) => {
  const exec = {
    handleAddClick: () => {
      if (addField?.trim() === "") {
        return false;
      }
      dispatch({ type: "add", payload: { text: addField.trim() } });

      setAddfield("");
    },
    switchToggle: (id: number) => {
      return dispatch({ type: "toggleDone", payload: { id } });
    },
    editTask: (id: number) => {
      const item = list.find((it: { id: number; }) => it.id === id);
      const newText = window.prompt("Editar Tarefa", item?.text);

      return !item || !newText || newText?.trim() === ""
        ? false
        : dispatch({ type: "editText", payload: { id, newtext: newText } });
    },
    removeTask: (id: number) => {
      return dispatch({ type: "remove", payload: { id: id } });
    },
  };

  return exec;
};
