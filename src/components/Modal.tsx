import { FC } from "react";
import { ModalType } from "../types/data";

export const Modal: FC<ModalType> = ({
  onCancel,
  onSubmit,
  submitText,
  cancelText,
  children,
}) => {
  return (
    <div>
      {children}

      <button onClick={onSubmit}>Добавить</button>
      {/* <button onClick={onCancel}>Закрыть</button> */}
    </div>
  );
};
