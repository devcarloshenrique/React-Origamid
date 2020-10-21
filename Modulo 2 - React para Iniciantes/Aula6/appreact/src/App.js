import React from 'react';
import Footer from './Footer';
import Form from './Form/Form';
import Form2 from './Form2/Form';
import Header from './Header';
import Index from './Desafio/Index';

/**
 * Chamando objetos
 */
const App = () => {
  const nome = 'Carlos';
  const ativo = true;

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  const funcao = () => 'Função';

  return (
    <>
      {funcao()}
      <p style={{ color: 'red' }} className={ativo ? 'ativo' : 'inativo'}>
        {nome}
      </p>
    </>
  );
};

/**
 * Imprimindo array
 */
const App1 = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};

/**
 * Imprimindo array de objetos
 */

const App2 = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros
        .filter((livro) => livro.ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome},{ano}
          </li>
        ))}
    </ul>
  );
};

/**
 *
 */

const App3 = () => {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  console.log(total);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>

      {total > 10000 && <p>'Você está gastando muito'</p>}
    </>
  );
};
/**
 * Retornando objetos com filter() e map()
 */

const App4 = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  return (
    <section>
      {produtos
        .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
        .map((produto) => (
          <div key={produto.nome}>
            <div>
              <h1>{produto.nome}</h1>
              <br />
            </div>
            <div>
              <span>
                <h3>Preço: {produto.preco}</h3>
              </span>
              <br /> <br />
            </div>
            {produto.cores.map((cores) => (
              <div key={cores}>
                <div
                  style={{
                    backgroundColor: cores,
                    width: '15rem',
                    height: '1.6rem',
                    color: 'white',
                  }}
                >
                  {cores}
                </div>
                <br />
              </div>
            ))}
          </div>
        ))}
    </section>
  );
};

/**
 * Eventos
 */

const App5 = () => {
  function handleScroll(event) {
    console.log(event);
  }

  /**
   * Não recomendado usar dessa forma
   * O recomendado seria utilizar hooks
   */
  window.addEventListener('scroll', handleScroll);

  return (
    <div style={{ height: '200vh' }}>
      <button onClick={(event) => console.log(event.target.innerText)}>
        Clique
      </button>
    </div>
  );
};

/**
 * Importando componente externo
 */

const App6 = () => {
  return (
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

/**
 * Props
 */

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const Titulo2 = (props) => {
  return <h1>{props.children}</h1>;
};

const App7 = () => {
  return (
    <div>
      <Titulo cor="red" texto="Carlos" />
      <Titulo cor="blue" texto="Carlos" />
      <Titulo2>Isso é um children</Titulo2>
    </div>
  );
};

/**
 * Props Exemplo 2
 */

const App8 = () => {
  return <Form2 />;
};

/**
 * Desafio Fim de modúlo
 */

const App9 = () => {
  return <Index />;
};

export default App9;
