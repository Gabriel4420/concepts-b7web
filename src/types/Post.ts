export type Post = {
  id: number;
  title: string;
  body: string;
};

export type ActionPost = {
  type: "add" | "remove" | "update" ;
  payload: {
    id: number;
    title: string;
    body: string;
  };
};


