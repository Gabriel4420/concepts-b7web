import { Dispatch } from "react";
import { ActionPost, Post } from "../Post";

export type PostContextType = {
  posts: Array<Post>;
  useAddPost: (title: string, body: string) => void;
  removePost?: (id: number) => void;
};
