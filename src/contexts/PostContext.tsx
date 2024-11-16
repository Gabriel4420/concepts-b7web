"use client";
import { postReducer } from "@/reducers/postReducer";
import { PostContextType } from "@/types/contexts/PostContextType";

import { createContext, ReactNode, useReducer } from "react";

export const PostContext = createContext<PostContextType | null>(null);
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  const useAddPost = (title: string, body: string) => {
      dispatch({ type: "add", payload: { title, body, id: posts.length } });
  
  };

  return (
    <PostContext.Provider value={{ posts, useAddPost }}>
      {children}
    </PostContext.Provider>
  );
};
