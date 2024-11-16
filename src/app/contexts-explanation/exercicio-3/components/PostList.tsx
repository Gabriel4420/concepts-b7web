"use client";
import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
  const postCtx = useContext(PostContext);

  return (
    <div className="flex flex-col py-4 px-5 gap-2 w-1/2">
      {postCtx?.posts.map((i) => {

        console.log(i.id)
        return (
          <div
            className={`flex flex-col w-full px-5 py-2 gap-4 ${i.id % 2 == 0 ? 'bg-slate-900':'bg-slate-400'} rounded-lg`}
            key={i.id}
          >
            <h2 className="text-white font-bold text-4xl capitalize">
              {i.title}
            </h2>
            <p className="text-base font-mono py-1 px-2 text-white">{i.body}</p>
          </div>
        );
      })}
    </div>
  );
};
