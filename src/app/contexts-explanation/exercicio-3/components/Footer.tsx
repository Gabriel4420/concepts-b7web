'use client'
import { PostContext } from "@/contexts/PostContext";
import React, { useContext } from "react";

export const Footer: React.FC = () => {
    const postCtx = useContext(PostContext)
  return (
    <footer className="flex w-full space-between bg-slate-800 h-20 absolute bottom-0 items-center px-5 ">
      <h3 className="text-3xl text-white">Total de posts: ({postCtx?.posts.length})</h3>
    </footer>
  );
};
