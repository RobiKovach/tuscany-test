import React from "react";
import "./Modal.scss";
import Register from "../Register";

const RegisterModal = ({ isOpen, onClose, onOpenLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Register onClose={onClose} onOpenLogin={onOpenLogin} />
      </div>
    </div>
  );
};

export default RegisterModal;
