import React, { FC, ReactNode, useState } from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/index.css";

const App: FC = () => {
  const [value, setValue] = useState<string>("");

  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCompleteChange = (id: number) => {
    // создаем новый массив
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, title: todo.title, complete: !todo.complete }
        : todo
    );
    setTodos(newTodos);
  };
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value === "") return;
    setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
    setValue("");
  };

  return (
    <div className=" sm p-5 flex flex-col space-y-4 w-[36rem]">
      <header>
        <h1 className="text-3xl font-bold">Список задач</h1>
      </header>
      <hr className="my-5" />
      <div className="flex">
        <input
          value={value}
          onChange={handleChange}
          placeholder="Введите задачу"
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <hr className="my-5" />

      <TodoContext.Provider value={{ handleCompleteChange }}>
        <div>
          <h3 className="text-2xl font-bold">Активные</h3>
          <TodoList items={todos.filter((todo) => !todo.complete)} />
        </div>
        <hr className="my-5" />

        <div>
          <h3 className="text-lg font-bold text-gray-500">Выполненные</h3>
          <TodoList items={todos.filter((todo) => todo.complete)} />
        </div>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
