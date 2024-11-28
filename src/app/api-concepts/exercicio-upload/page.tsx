"use client";
import RoundInput from "@/components/Input";
import axios from "axios";
import { useRef, useState } from "react";

const Upload: React.FC = () => {
  const controller = new AbortController();

  const handleStartRequest = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typecode.com/posts",
        {
          signal: controller.signal,
        }
      );

      return console.log(response.data);
    } catch (err) {
      console.log("Deu buxa");
    }
  };
  const handleCancelRequest = () => controller.abort();

  const [legendInput, setLegendInput] = useState("");
  //criando a referência do objeto
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () => {
    //Verificando se o arquivo foi enviado
    if (
      fileInputRef.current?.files &&
      fileInputRef.current.files.length > 0 &&
      legendInput === ""
    ) {
      const fileItem = fileInputRef.current.files[0];

      const allowed = ["image/jpg", "image/jpeg", "image/png"];
      //Verificando os tipos permitidos
      if (allowed.includes(fileItem.type)) {
        const data = new FormData();

        data.append("image", fileItem);
        data.append("legend", legendInput);

        /* 
          exemplo usando fetch
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-type": "multipart/form-data",
          },
          body: data,
        });

        return res.json() */

        const response = await axios.post(
          "https://jsonplaceholder.typecode.com/posts",
          data
        );
        console.log(response.data);
      } else {
        alert("arquivo incompativel");
      }
    } else {
      alert(
        "Selecione um arquivo e/ou preencha o campo de legenda, o campo de legenda é obrigatório !"
      );
    }
  };

  return (
    <div className="h-screen bg-gradient-to-tr to-gray-500 from-slate-900 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl text-white">Upload de imagens</h1>

      <div className="max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4">
        <input ref={fileInputRef} type="file" />
        <RoundInput
          value={legendInput}
          isSearchOrSender="sender"
          title="O campo de legenda é obrigatório"
          onChange={(e) => setLegendInput(e.target.value)}
          placeholder="Digite a legenda"
        />

        <button
          className="bg-transparent hover:bg-white border border-white text-white hover:text-slate-700"
          onClick={handleFileSend}
          type="submit"
        >
          Enviar imagem
        </button>
      </div>
    </div>
  );
};

export default Upload;
