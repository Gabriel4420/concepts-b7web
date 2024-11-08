"use client";
import { LoginCTX } from "@/contexts/LoginContext";
import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { FaCircleUser, FaUser } from "react-icons/fa6";

export const Header = () => {
  const ctx = useContext(LoginCTX);
  return (
    <header className="flex  w-full absolute top-0 h-20 items-center px-10 justify-end ">
      <h1 className="text-3xl text-white">
        {ctx?.username !== "" && ctx?.password !== "" ? ctx?.username : "Login"}
      </h1>

      {ctx?.username !== "" && ctx?.password !== "" ? (
        <>
          <FaCircleUser size={40} className="ml-4 text-white shadow-md" />
          <div className="rounded-full bg-green-300 h-3 w-3 absolute top-5 right-9"></div>
        </>
      ) : (
        <CiLogin size={40} className="ml-4 text-white shadow-md" />
      )}
    </header>
  );
};
