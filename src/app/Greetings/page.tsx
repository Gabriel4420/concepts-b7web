"use client";
import { getNowHour } from "@/helper/getTimeNow";

const Greetings: React.FC<{}> = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-white font-bold text-9xl">
        {getNowHour().withoutParse}
      </h1>
      <p className="font-bold text-white text-3xl py-10">
        {getNowHour().greeting}
      </p>
    </div>
  );
};

export default Greetings;
