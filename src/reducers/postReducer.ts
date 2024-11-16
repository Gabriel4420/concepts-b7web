import { ActionPost, Post } from "@/types/Post";

export const postReducer = (posts: Array<Post>, action: ActionPost) => {
  switch (action.type) {
    case "add":
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];
    case "update":
      return posts.map((t) => {
        if (t.id === action.payload.id) {
          t.body = action.payload.body;
          t.title = action.payload.title;
        }
        return t;
      });
    case "remove":
      return posts.filter((t) => t.id !== action.payload.id);
    default:
      return posts;
  }
};
