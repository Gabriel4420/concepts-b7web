import { getToday } from "@/helper/format-date";
import { Habilities } from "@/types/Habilities";
import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
  name?: string;
  age?: number;
  habilities?: Array<Habilities>;
}

export function Card({ children }: CardProps) {
  return (
    <div className="max-w-xs px-5 rounded-lg overflow-hidden shadow-2xl shadow-black bg-gray-100">
      {children}
    </div>
  );
}

export function CardDescription({ name, age }: CardProps) {
  return (
    <div className="px-6 py-4">
      <h1 className="font-bold text-red-700 mb-2">
        {name} - {getToday()}
      </h1>
      <p className="text-sm text-gray-700 font-semibold">{age} anos</p>
    </div>
  );
}

export function CardHabilitiesList({ habilities }: CardProps) {
  return (
    <div className="px-6 py-1 mb-10">
      <ul>
        {habilities &&
          habilities.map((expertise, index) => (
            <li
              key={index}
              className="text-sm font-medium leading-tight text-emerald-600"
            >
              {expertise.nome}
            </li>
          ))}
      </ul>
    </div>
  );
}
