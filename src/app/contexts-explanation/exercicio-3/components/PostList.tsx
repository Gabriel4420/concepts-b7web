'use client'
import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";

export const PostList = () => {
  const postCtx = useContext(PostContext);

  return (
    <div className="flex flex-col py-4 px-5 gap-2">
      {postCtx?.posts.map((i) => (
        <div className="flex flex-col w-full px-5 py-2 gap-4" key={i.id}>
          <h2 className="text-white font-bold text-4xl">{i.title}</h2>
          <p className="text-base font-mono py-1 px-2">{i.body}</p>
        </div>
      ))}
    </div>
  );
};
