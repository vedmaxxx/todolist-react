import { FC, useContext } from "react";
import { ITodo } from "../types/data";
import { TodoContext } from "../contexts/TodoContext";

interface ITodoItem extends ITodo {}

// Функциональный компонент с типом пропсов - ITodoItem
export const TodoItem: FC<ITodoItem> = (props) => {
  // объект пропсов деструктурируем в переменные
  const { id, title, complete } = props;

  const { handleCompleteChange, deleteTodo } = useContext(TodoContext);

  return (
    <div key={id} className="my-2 flex w-full items-start gap-4">
      <input
        className=" my-2 min-w-5 min-h-5 "
        type="checkbox"
        checked={complete}
        onChange={() => {
          handleCompleteChange(id);
        }}
      />
      <div className="font-normal self-center grow">{title}</div>

      <button
        onClick={() => {
          deleteTodo(id);
        }}
        className=" py-2 px-3  text-red-400 text-xs hover:text-red-700 border-solid border-2 rounded-md transition"
      >
        Удалить
      </button>
    </div>
  );
};
