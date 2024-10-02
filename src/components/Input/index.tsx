import React from "react";
import { FiSearch, FiSend } from "react-icons/fi"; // Importando o ícone de busca

interface RoundInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  isSearchOrSender: "sender" | "search";
}

const RoundInput: React.FC<RoundInputProps> = ({
  label,
  placeholder,
  isSearchOrSender,
  ...props
}) => {
  return (
    <div className="flex flex-col items-start w-full ">
      {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {isSearchOrSender === "search" ? (
            <FiSearch className="text-gray-500" />
          ) : (
            <FiSend className="text-gray-500" />
          )}
        </span>
        <input
          type="text"
          placeholder={placeholder}
          className="rounded-full border shadow-lg border-gray-300 pl-10 p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />
      </div>
    </div>
  );
};

export default RoundInput;
