import { Question } from "@/types/Questions";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (key: number) => {
    return selectedAnswer === null && (setSelectedAnswer(key), onAnswer(key));
  };
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </h2>
      <div>
        {question.options.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => checkQuestion(index)}
              className={`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 border-blue-300  ${
                selectedAnswer !== null
                  ? "cursor-auto hover:opacity-100"
                  : "cursor-pointer hover:opacity-60 "
              } ${
                selectedAnswer !== null &&
                selectedAnswer === question.anwser &&
                selectedAnswer === index
                  ? "cursor-auto"
                  : "bg-green-100 border-green-300"
              } ${
                selectedAnswer !== null &&
                selectedAnswer !== question.anwser &&
                selectedAnswer === index
                  ? "cursor-auto"
                  : "bg-red-100 border-red-300"
              }  `}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
