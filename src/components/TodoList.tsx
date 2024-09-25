import { FC } from "react";
import { ITodo } from "../types/data";
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
}

// Функциональный компонент с типом пропсов - TodoItemsProps
export const TodoList: FC<ITodoListProps> = ({ items }) => {
  return (
    <div>
      {items.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};
