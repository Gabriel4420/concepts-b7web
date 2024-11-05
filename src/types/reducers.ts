

type AddAction = {
  type: "add";
  payload: { text: string };
};

type EditTextAction = {
  type: "editText";
  payload: {
    id: number;
    newtext: string;
  };
};

type ToggleDoneAction = {
  type: "toggleDone";
  payload: { id: number };
};

type RemoveAction = {
  type: "remove";
  payload: { id: number };
};

export type Item = {
  id: number;
  text: string;
  done: boolean;
};
export type ListAction = AddAction | EditTextAction | ToggleDoneAction | RemoveAction;