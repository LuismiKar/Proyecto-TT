import '../Hojas-de-estilo/Modal.css';

const Modal = ({ children, isOpen, closeModal }) => {

  const handleModalContainerClick = (e) => e.stopPropagation();

  return(
    <article className={`modal ${isOpen && "abrir"}`} onClick={closeModal}>
      <div className="modal-contenedor" onClick={handleModalContainerClick}>
        <button className="modal-cerrar" onClick={closeModal}>x</button>
        {children}
      </div>
    </article>
  );
}

export default Modal;