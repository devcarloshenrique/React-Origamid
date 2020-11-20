import React from 'react';
import './App.css';
import Title from './Title';
import Produto from './Components/Produto';
import Produto3 from './Produto3';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Slide from './Slide';

/**
 * Para utilizar o bootstrap, na versão não componentizada é necessário importar esse dois links.
 */
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * CSS import
 */

function App() {
  return (
    <div className="container">
      <Title />
    </div>
  );
}

/**
 * Css Module,
 */

const App1 = () => {
  return (
    <div>
      <Produto />
    </div>
  );
};

/**
 * Exemplo styled-components
 */

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto2 = styled.div`
  flex: 1;
`;

const Titulo2 = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco2 = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const Comprar2 = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  &:hover {
    background: tomato;
  }
`;

/**
 * Exemplo styled-components
 */

const App2 = () => {
  /** Exemplo diferenciado de char uma função */
  function template(value, total) {
    console.log(value);
    console.log(total);
  }

  const total = 1000;
  template`Isso é ${total} um teste`;
  /** Exemplo diferenciado de char uma função */

  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <div>
      <ProdutosContainer>
        <Produto2>
          <Titulo2>
            Notebook <Preco2 cor="red">R$ 1999</Preco2>
          </Titulo2>
          <Comprar>Comprar</Comprar>
        </Produto2>
        <Produto2>
          <Titulo2>
            Smartphone <Preco2 cor="blue">R$ 2999</Preco2>
          </Titulo2>
          <Comprar>Comprar</Comprar>
        </Produto2>
      </ProdutosContainer>
      <br />
      <Comprar2 ativo={ativo} onClick={handleClick}>
        Comprar2
      </Comprar2>
    </div>
  );
};

/**
 * Usando biblioteca externa bootstrap
 */

const App3 = () => {
  return (
    <div className="card bg-dark text-white m-5" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Notebook</div>
      <div className="card-body">
        <h5 class="card-title">R$ 2500</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non omnis
          reprehenderit vitae repellendus consequatur. Quam, facere eius.
          Deleniti animi iste aperiam repellendus. Aliquam officiis accusamus ab
          alias perspiciatis! Soluta, culpa.
        </p>
      </div>
    </div>
  );
};

/**
 * Usando bootstrap na versão componentizada
 */

const App4 = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit ut
          voluptatem reprehenderit totam tempore corrupti doloremque aut omnis
          adipisci, dolore velit porro enim commodi quisquam. Adipisci autem nam
          perspiciatis nobis.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

/**
 * Animações 1
 */

const App5 = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto3 />}
    </div>
  );
};

/**
 * Animação 2
 */

const App6 = () => {
  return (
    <div>
      <Slide />
    </div>
  );
};

export default App5;
