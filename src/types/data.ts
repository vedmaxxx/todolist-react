export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  updateTodo: (id: number) => void;
};

export type ModalType = {
  onCancel: () => void;
  onSubmit: () => void;
  submitText?: string;
  cancelText?: string;
  children: React.ReactNode;
};
