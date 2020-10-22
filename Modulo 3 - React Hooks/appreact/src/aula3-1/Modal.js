import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return (
      <div>
        <p>
          <button onClick={() => setModal(false)}>Fechar</button>
        </p>
      </div>
    );
  return null;
};

export default Modal;
