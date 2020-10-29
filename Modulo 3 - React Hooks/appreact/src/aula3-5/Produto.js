import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      <p>
        <button onClick={handleClick}>Produto: {global.contar}</button>
      </p>
    </div>
  );
};

export default Produto;
