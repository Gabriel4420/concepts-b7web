import { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorButton: "blue" | "white" | "black" | "red" | "orange";
  title2?: string;
  message: string;
}

export function CustomButton({
  colorButton = "blue",
  title2 = "Click Me",
  message,
}: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`${
        colorButton == "white"
          ? "bg-white"
          : colorButton == "black"
          ? "bg-black"
          : colorButton == "blue"
          ? "bg-blue-600"
          : colorButton == "red"
          ? "bg-red-600"
          : colorButton == "orange" && "bg-orange-600"
      } rounded-md py-2 px-2 mt-4 ${
        colorButton === "white" ? "text-black" : "text-white"
      }`}
      onClick={() => alert(message)}
    >
      {title2}
    </button>
  );
}
