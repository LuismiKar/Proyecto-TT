import '../Hojas-de-estilo/Modal.css';
import { FiX } from "react-icons/fi";

const Modal = ({ children, isOpen, closeModal }) => {

  const handleModalContainerClick = (e) => e.stopPropagation();

  return(
    <article className={`modal ${isOpen && "abrir"}`} onClick={closeModal}>
      <div className="modal-contenedor" onClick={handleModalContainerClick}>
        <FiX className="modal-cerrar" onClick={closeModal} ></FiX>
        {children}
      </div>
    </article>
  );
}

export default Modal;