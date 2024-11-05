import { ListAction, Item } from "@/types/reducers";

export const listReducer = (list: Array<Item>, action: ListAction) => {
  switch (action.type) {
    case "add":
      return [...list, { id: 1, text: action.payload.text, done: false }];
    case "editText":
      return list.map((t) => {
        if (t.id === action.payload.id) t.text = action.payload.newtext;
        return t;
      });
    case "toggleDone":
      return list.map((t) => {
        if (t.id === action.payload.id) {
          return { ...t, done: !t.done };
        } else {
          return t;
        }
      });
    case "remove":
      return list.filter((t) => t.id !== action.payload.id);
    default:
      return list;
  }
};
