import React from 'react';
import { GlobalContext2 } from './GlobalContext2';

const Produto = () => {
  const global = React.useContext(GlobalContext2);

  if (global.dados === null) return null;
  return (
    <div>
      {global.dados.map((dados) => (
        <p key={dados.id}>Produto: {dados.nome}</p>
      ))}
    </div>
  );
};

export default Produto;
