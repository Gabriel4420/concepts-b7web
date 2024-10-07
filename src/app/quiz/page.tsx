import { Questions } from "@/helper/questions";
import { questions } from "@/types/Questions";
import React from "react";

// import { Container } from './styles';

const Quiz: React.FC = () => {
  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
        <h1 className="text-6xl text-white text-start w-full pl-16">Quiz de perguntas</h1>
      {Questions.map((questions, index) => (
        <div key={questions.id} className="container max-w-1/2 bg-gray-200">
          <h2 className="text-bold text-4xl text-center text-black/80">{questions.id}. {questions.question}</h2>
          
        </div>
      ))}
    </div>
  );
};

export default Quiz;
