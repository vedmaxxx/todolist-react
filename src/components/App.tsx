import React, { FC, ReactNode, useState } from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/index.css";
import AddTodo from "./AddTodo";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleCompleteChange = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id
        ? { id: todo.id, title: todo.title, complete: !todo.complete }
        : todo
    );
    setTodos(newTodos);
  };

  const addTodo = (value: string) => {
    if (value === "") return;
    setTodos([...todos, { id: Date.now(), title: value, complete: false }]);
    console.log("addTodo");
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const getActiveTodos = () => {
    if (todos.filter((todo) => !todo.complete).length !== 0)
      return <TodoList items={todos.filter((todo) => !todo.complete)} />;
    else return <div className="my-2 text-gray-500">Задач пока нет...</div>;
  };

  return (
    <div className=" sm p-5 flex flex-col space-y-4 w-[36rem]">
      <header>
        <h1 className="text-3xl font-bold">Список задач</h1>
      </header>
      <hr className="my-5" />
      <AddTodo addTodo={addTodo} />
      <hr className="my-5" />

      <TodoContext.Provider value={{ handleCompleteChange, deleteTodo }}>
        <div>
          <h3 className="text-2xl font-bold">Активные</h3>
          {getActiveTodos()}
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
