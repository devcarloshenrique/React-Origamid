import React from 'react';
import BottonModal from './aula3-1/ButtonModal';
import Modal from './aula3-1/Modal';
import Produto from './aula3-1/Produto';
import Produto2 from './aula3-2/Produto2';
import Produto3 from './exercicios/Produto3';
import Produto5 from './aula3-5/Produto';
import Produto6 from './aula3-5/Produto2';
import { GlobalStorage } from './aula3-5/GlobalContext';
import { GlobalStorage2 } from './aula3-5/GlobalContext2';
import { GlobalContext2 } from './aula3-5/GlobalContext2';
import useLocalStorage from './aula3-6/useLocalStorage';
import useFetch from './aula3-6/useFetch';

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

/**
 * Use Memo -> Para operações lentas
 */

const App11 = () => {
  function operacaoLenta() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + i / 10;
    }

    return c;
  }

  const [contar, setContar] = React.useState(0);

  // const valor = React.useMemo(() => {
  //   const localItem = window.localStorage.getItem('preferido');
  //   console.log('Aconteceu o memo');
  //   return localItem;
  // }, []);

  const t1 = performance.now();
  const valor = React.useMemo(() => {
    operacaoLenta();
  }, []);

  // console.log(valor);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

/**
 * useCallback
 */

const App12 = () => {
  const [contar, setContar] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return <button onClick={handleClick}>{contar}</button>;
};

/**
 * Demonstrando o useCallback 0304
 */

const set1 = new Set();
const set2 = new Set();

const Produto4 = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App13 = () => {
  const [contar, setContar] = React.useState(0);

  return (
    <div>
      <Produto4 />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

/**
 * Contexto global
 */

const App14 = () => {
  return (
    <GlobalStorage>
      <Produto5 />
    </GlobalStorage>
  );
};

/**
 * Contexto global
 */

const Limpar = () => {
  const global = React.useContext(GlobalContext2);

  return (
    <div>
      <button onClick={global.limparDados}>Limpar</button>
    </div>
  );
};

const App15 = () => {
  return (
    <GlobalStorage2>
      <Produto6 />
      <Limpar />
    </GlobalStorage2>
  );
};

const App16 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto Preferido: {produto}</p>
      <p>
        <button onClick={handleClick}>Notebook</button>
      </p>
      <p>
        <button onClick={handleClick}>SmartPhone</button>
      </p>
    </div>
  );
};

const App17 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  console.log(data);

  if (error) return <p>Error 404</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto Preferido: {produto}</p>
        <p>
          <button onClick={handleClick}>Notebook</button>
        </p>
        <p>
          <button onClick={handleClick}>SmartPhone</button>
        </p>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  else return null;
};

export default App17;
