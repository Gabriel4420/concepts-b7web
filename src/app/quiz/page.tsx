"use client";
import { Questions } from "@/helper/questions";
import React, { useState } from "react";
import { QuestionItem } from "./components/QuestionItem";

// import { Container } from './styles';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = "Quiz de Culinária";

  const handleAnswered = (answer: number) => {};
  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white text-start w-full pl-16">{title}</h1>

      <div className="w-full max-w-1/2  rounded-md bg-white text-black shadow shadow-black">
        <h2 className="text-bold text-2xl py-5 text-center shadow shadow-gray-300 text-black/80"></h2>
        <p className="text-center text-bold text-black">
          x de {Questions.length} pergunta{Questions.length === 1 ? "" : "s"}
        </p>
        <div className="p-5">
          <QuestionItem
            question={Questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
        </div>
        <div className="p-5 text-center border-t border-gray-300">...</div>
      </div>
    </div>
  );
};

export default Quiz;
