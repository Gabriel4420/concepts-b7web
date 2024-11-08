import { useContext } from "react";
import { FaUser } from "react-icons/fa6";
import { onlineCTX } from "@/contexts/OnlineContext";

export const OnlineViewer = () => {
  const ctx = useContext(onlineCTX);

  return (
    <div className="flex justify-between w-full px-10">
      <div className="flex justify-center items-center px-2 py-2">
        <FaUser size={40} className="text-white mx-4" />
        <h1 className="text-white font-bold text-2xl ml-2">
          {ctx?.onlineCounter} Online persons
        </h1>
      </div>
      <button
        onClick={() => ctx?.setOnlineCounter(0)}
        className="px-4 py-4 bg-red-800 w-1/6 cursor-pointer text-4xl text-white uppercase rounded-lg"
      >
        ban
      </button>
      <button
        onClick={() => ctx?.setOnlineCounter(ctx.onlineCounter+2)}
        className="px-4 py-4 bg-blue-800 w-1/6 cursor-pointer text-4xl text-white uppercase rounded-lg"
      >
        Entry
      </button>
    </div>
  );
};
