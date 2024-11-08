"use client";

import { CountProvider, onlineCTX } from "@/contexts/OnlineContext";
import { OnlineViewer } from "./components/OnlineViewer";
import { useContext } from "react";

const OnlineUsers =  () => {
 


  return (
    <div className="h-screen bg-gradient-to-tr to-orange-500 from-slate-500 gap-10 flex flex-col items-center justify-center">
      <CountProvider>
        <OnlineViewer />
      </CountProvider>
    </div>
  );
};

export default OnlineUsers;
