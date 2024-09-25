import { createContext } from "react";

// Тип значения контекста
interface TodoCallback {
  handleCompleteChange: (id: number) => void;
}

// Создаем объект контекста TodoContext, который хранит объект TodoCallback со свойством, в котором
// лежит коллбэк handleCompleteChange
export const TodoContext = createContext<TodoCallback>({
  handleCompleteChange: () => {},
});
