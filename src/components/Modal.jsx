import './Modal.css';
import { useEffect, useRef } from "react";


export default function Modal({isOpen, onClose, title, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen,]);

  return (
    <dialog
      ref={dialogRef}
      data-lenis-prevent={true}
      onClose={onClose}
      className="modal-box"
      onClick={(e) => e.target === dialogRef.current && onClose()} // Schließt bei Klick auf Backdrop
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </dialog>
  );
};
