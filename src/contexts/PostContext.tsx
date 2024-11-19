"use client";
import { postReducer } from "@/reducers/postReducer";
import { PostContextType } from "@/types/contexts/PostContextType";

import { createContext, ReactNode, useEffect, useReducer } from "react";

const STORAGE_KEY = "postContextContent";

export const PostContext = createContext<PostContextType | null>(null);
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(
    postReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  );

  const useAddPost = (title: string, body: string) => {
    dispatch({ type: "add", payload: { title, body, id: posts.length } });
  };

  const removePost = (id: number) => {
    dispatch({ type: "remove", payload: { id, title: "", body: "" } });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <PostContext.Provider value={{ posts, useAddPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
