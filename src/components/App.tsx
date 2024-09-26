import React, { FC, ReactNode, useState } from "react";

import { ITodo } from "../types/data";
import { TodoList } from "./TodoList";
import { TodoContext } from "../contexts/TodoContext";
import "../styles/index.css";
import AddTodo from "./AddTodo";

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [visibleCompleted, setVisibleCompleted] = useState<boolean>(false);

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
    <div className="m-auto sm py-10 px-5 flex flex-col space-y-4 w-[36rem]">
      <header className="">
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
          <div className="py-1 px-2 rounded-full flex w-fit items-center gap-x-2 hover:bg-sky-100  transition  basis-0 shrink-0">
            <button
              onClick={() => {
                setVisibleCompleted(!visibleCompleted);
              }}
              className={
                visibleCompleted
                  ? "text-lg font-bold   text-sky-700"
                  : "text-lg font-bold   text-gray-500"
              }
            >
              Выполненные
            </button>

            <button
              onClick={() => {
                setVisibleCompleted(!visibleCompleted);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="black"
                className={
                  visibleCompleted
                    ? " hover:bg-sky-100 rounded-full transition size-6 "
                    : "  rounded-full transition size-6 rotate-90"
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>

          {visibleCompleted ? (
            <TodoList items={todos.filter((todo) => todo.complete)} />
          ) : null}
        </div>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
