"use client";
import RoundInput from "@/components/Input";
import { PostContext } from "@/contexts/PostContext";
import React, { useContext, useState } from "react";

// import { Container } from './styles';

const FormPost: React.FC = () => {
  const postCtx = useContext(PostContext);

  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      postCtx?.useAddPost(titleInput, bodyInput);
      setTitleInput("");
      setBodyInput("");
    }
  };

  return (
    <div className="flex flex-col gap-5 w-full border border-dotted border-gray-400 p-3">
      <RoundInput
        isSearchOrSender="sender"
        placeholder="Digite um título"
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <textarea
        placeholder="Fale mais sobre o assunto que deseja postar ..."
        className="border border-gray-300 p-2 mx-2 text-black text-base rounded-md"
        onChange={(e) => setBodyInput(e.target.value)}
      ></textarea>
      <div className="flex items-end justify-center w-full">
        <button
          onClick={handleAddButton}
          className="bg-blue-500 text-white px-3 py-1 text-xl rounded-md font-bold w-44"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default FormPost;
