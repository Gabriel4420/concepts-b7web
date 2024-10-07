import { Todoitem } from "@/types/TodoItem";

export const handleAction = (
  action: "add" | "remove" | "update",
  setList: React.Dispatch<React.SetStateAction<Todoitem[]>>,
  list: Todoitem[],
  taskName: string,
  setTaskName: React.Dispatch<React.SetStateAction<string>>,
  id?: number
) => {
  switch (action) {
    case "add":
      setList([
        ...list,
        { id: list.length + 1, label: taskName, checked: false },
      ]);
      setTaskName("");
      break;
    case "update":
      let newList = [...list];

      for (let i in newList) {
        newList[i].id === id
          ? (newList[i].checked = !newList[i].checked)
          : newList[i].checked;
      }

      setList(newList);

      break;
    case "remove":
      setList(list.filter((x) => x.id !== id));

      break;
  }
};
