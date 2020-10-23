import React from 'react';
import BottonModal from './aula3-1/ButtonModal';
import Modal from './aula3-1/Modal';
import Produto from './aula3-1/Produto';
import Produto2 from './aula3-2/Produto2';
import Produto3 from './exercicios/Produto3';

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

/**
 * UseState
 */
const App5 = () => {
  const [contar, setContar] = React.useState(0);

  React.useEffect(() => {
    console.log('Executou');
  }, []);

  React.useEffect(() => {
    document.title = 'Total' + contar;
  }, [contar]);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/**
 * UseState
 */
const App6 = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div>
      {dados && (
        <div>
          <p> {dados.nome} </p>
        </div>
      )}
      {dados && (
        <div>
          <p> {dados && dados.preco * contar} </p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

/**
 * UseState
 */

const App7 = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      {ativo && <Produto2 />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>
  );
};

/**
 * UseState
 */
const App8 = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto3 produto={produto} />
    </div>
  );
};

/**
 * Use Ref
 */
const App9 = () => {
  const [comentarios, setComentarios] = React.useState(['teste', 'teste2']);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef('');

  function handleClick() {
    if (input !== '') {
      setComentarios([...comentarios, input]);
      setInput('');
      inputElement.current.focus();
    }
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
        <input
          type="text"
          ref={inputElement}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleClick}>Enviar</button>
      </ul>
    </div>
  );
};

/**
 * UseRef
 */

const App10 = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao carinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 1000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App10;
