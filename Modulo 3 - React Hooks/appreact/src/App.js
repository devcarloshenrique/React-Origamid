import React from 'react';
import BottonModal from './aula3-1/ButtonModal';
import Modal from './aula3-1/Modal';
import Produto from './aula3-1/Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Andre', idade: '30' });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'IFCE' });
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>

      <button onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
    </>
  );
};

const App2 = () => {
  /**
   * --- Hook ---
   * Modal => alteração
   * setModal => função callback que re-redenriza o componente
   */
  const [modal, setModal] = React.useState(false);

  console.log('Teste');

  return (
    <div>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>

      <BottonModal setModal={(modal, setModal)} />

      <Modal modal={modal} setModal={setModal} />
    </div>
  );
};

const App3 = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      return contar + 1;
    });

    /**
     * Essa função não pode está dentro de setContar pois resultaria em efeito colateral, podendo gerar erros
     * Por isso que é utilziado o  <React.StrictMode> dentro de index.js, para debuggar esses erros
     */
    setItems([...items, 'Item ' + (contar + 1)]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

const App4 = function () {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    ).then();

    const json = await response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <p>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
          notebook
        </button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
          smartphone
        </button>
        <button style={{ margin: '.5rem' }} onClick={handleClick}>
          tablet
        </button>
        {carregando && <p>Carregando...</p>}
        {!carregando && dados && <Produto dados={dados} />}
      </p>
    </div>
  );
};

export default App4;
