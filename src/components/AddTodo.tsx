import React, { FC, useState } from "react";

interface AddTodoProps {
  addTodo: (value: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex items-center">
      <input
        className="p-2 me-5 basis-full transition border-solid border-2 rounded-md"
        value={value}
        onChange={handleChange}
        placeholder="Введите задачу"
      />
      <button
        onClick={() => addTodo(value)}
        className="py-2 px-6 bg-sky-700 border-solid border-2 border-sky-700 text-white transition hover:bg-white hover:text-sky-700 rounded-md"
      >
        Добавить
      </button>
    </div>
  );
};

export default AddTodo;
