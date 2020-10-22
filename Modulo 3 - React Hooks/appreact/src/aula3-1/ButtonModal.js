import React from 'react';

const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }
  return (
    <p>
      <button onClick={handleClick}>Abrir</button>
    </p>
  );
};

export default ButtonModal;
