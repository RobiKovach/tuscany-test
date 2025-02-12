import React from "react";
import "./Modal.scss";
import Login from "../Login";

const LoginModal = ({ isOpen, onClose, onOpenRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Login onClose={onClose} onOpenRegister={onOpenRegister} />
      </div>
    </div>
  );
};

export default LoginModal;
