"use client";
import { PostContext } from "@/contexts/PostContext";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";

export const PostList = () => {
  const postCtx = useContext(PostContext);

  return (
    <div className="flex flex-col py-4 px-5 gap-2 w-1/2">
      {postCtx?.posts.length === 0 && <div className="bg-slate-300 w-full rounded-md flex items-center justify-center"><h2 className="p-2 capitalize text-2xl text-slate-900">não tem post ...</h2></div>}
      {postCtx?.posts.map((i) => {
        console.log(i.id);
        return (
          <div className="flex w-full" key={i.id}>
            <div
              className={`flex w-full items-center px-5 py-2 gap-4 ${
                i.id % 2 == 0 ? "bg-slate-900" : "bg-slate-400"
              } rounded-lg`}
            >
              <div className="flex flex-col w-full justify-start p-2">
                <h2 className="text-white font-bold text-4xl capitalize">
                  {i.title}
                </h2>
                <p className="text-base font-mono py-1 px-2 text-white">
                  {i.body}
                </p>
              </div>
              <button
                onClick={() => postCtx.removePost(i.id)}
                title="Remover Post"
                className="bg-red-600 hover:bg-red-500 flex items-center justify-center h-10 w-1/12 rounded-md"
              >
                {" "}
                <FaTrash size={20} className="text-white" />{" "}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
