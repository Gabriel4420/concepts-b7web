'use client'
import { PostContextType } from "@/types/contexts/PostContextType";
import { Post } from "@/types/Post";
import { createContext, ReactNode, useState } from "react";

export const PostContext = createContext<PostContextType | null>(null);
export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Array<Post>>([]);
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};
