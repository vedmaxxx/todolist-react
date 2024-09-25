import { FC, useContext } from "react";
import { ITodo } from "../types/data";
import { TodoContext } from "../contexts/TodoContext";

interface ITodoItem extends ITodo {}

// Функциональный компонент с типом пропсов - ITodoItem
export const TodoItem: FC<ITodoItem> = (props) => {
  // объект пропсов деструктурируем в переменные
  const { id, title, complete } = props;

  const { handleCompleteChange } = useContext(TodoContext);

  return (
    <div key={id} className="flex flex-wrap my-1 w-auto">
      <input
        className="me-2"
        type="checkbox"
        checked={complete}
        onChange={(e) => {
          handleCompleteChange(id);
        }}
      />
      <div className=" font-normal">{title}</div>
    </div>
  );
};
