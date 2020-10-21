import React from 'react';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <div>
      <h1 style={{ color: 'green' }}>Produtos</h1>

      {produtos.map((produto) => (
        <>
          <p>{produto.nome}</p>
          <p>
            <fieldset>
              <ul>
                {produto.propriedades.map((propriedade) => (
                  <li>{propriedade}</li>
                ))}
              </ul>
            </fieldset>
          </p>
        </>
      ))}
    </div>
  );
};

export default Produtos;
