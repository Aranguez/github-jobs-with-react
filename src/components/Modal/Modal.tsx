import React, { useState, ReactNode } from "react";
import "./modal.styles";

type Props = {
  open: boolean;
  title?: string;
  confirmEvent?: () => any;
  confirmMsg?: string;
  cancelEvent?: () => any;
  cancelMsg?: string;
  children: ReactNode;
};

const Modal: React.FC<Props> = ({
  open,
  title,
  confirmEvent,
  confirmMsg = "Aceptar",
  cancelEvent,
  cancelMsg = "Cancelar",
  children,
}) => {
  return (
    <div className={`modal ${open && "open"}`}>
      <h1 className="modal__title">{title}</h1>
      {children}
      <div className="buttons">
        <button onClick={cancelEvent} className="confirm-btn">
          {cancelMsg}
        </button>
        <button onClick={confirmEvent} className="cancel-btn">
          {confirmMsg}
        </button>
      </div>
    </div>
  );
};

export const ModalExample: React.FC<any> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
    console.log("cancela");
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    console.log("confirma");
  };

  return (
    <Modal
      open={isModalOpen}
      cancelEvent={handleCancel}
      confirmEvent={handleConfirm}
    >
      <h5>Contenido del modal</h5>
    </Modal>
  );
};

export default Modal;
