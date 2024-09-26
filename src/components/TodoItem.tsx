import { FC, useContext, useState } from "react";
import { ITodo } from "../types/data";
import { TodoContext } from "../contexts/TodoContext";

interface ITodoItem extends ITodo {}

// Функциональный компонент с типом пропсов - ITodoItem
export const TodoItem: FC<ITodoItem> = (props) => {
  // объект пропсов деструктурируем в переменные
  const { id, title, complete } = props;

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);

  const { handleCompleteChange, deleteTodo, editTodo } =
    useContext(TodoContext);

  return (
    <div key={id} className="my-2 flex w-full items-start  gap-4">
      {!isEdit ? (
        // Обычное отображение задачи
        <>
          <input
            className="my-3 min-w-5 min-h-5 "
            type="checkbox"
            checked={complete}
            onChange={() => {
              handleCompleteChange(id);
            }}
          />
          <div className="font-normal self-center grow break-words">
            {title}
          </div>
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            className="my-2  text-gray-400 text-xs hover:text-sky-700 transition  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              deleteTodo(id);
            }}
            className=" my-2  text-gray-400 text-xs hover:text-red-700 transition "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </>
      ) : (
        // Отображение поля редактирования и кнопки сохранения
        <div className="grow flex self-center">
          <input
            type="text"
            value={value}
            className="py-2 px-2 self-center grow transition border-solid border-2 rounded-md"
            placeholder="Изменить"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={() => {
              editTodo(id, value);
              setIsEdit(false);
            }}
            className="py-2 ms-2 px-2 self-center  bg-sky-700 border-solid border-2 border-sky-700 text-white transition hover:bg-white hover:text-sky-700 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
