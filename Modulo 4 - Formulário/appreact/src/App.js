import React from 'react';
import Input from './Form/input';
import Select from './Form/select';
import Radio from './Form/radio';
import Checkbox from './Form/checkbox';
import useForm from './Hooks/useForm';
import Radio2 from './Form2/Radio';

/**
 * Formulário Reativo
 */
const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button>Enviar</button>
    </form>
  );
};

/**
 * Formulário Reativo, um pouco mais elaborado
 */

const App2 = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />

      {form.name}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      {form.email}
      <br />
      <br />
      <button>Enviar</button>
    </form>
  );
};

/**
 * Formulário com requisição post
 */

const App3 = () => {
  const formFields = [
    {
      id: 'nome',
      label: 'Nome',
      type: 'text',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      id: 'senha',
      label: 'Senha',
      type: 'password',
    },
    {
      id: 'cep',
      label: 'Cep',
      type: 'text',
    },
    {
      id: 'rua',
      label: 'Rua',
      type: 'text',
    },
    {
      id: 'numero',
      label: 'Número',
      type: 'text',
    },
    {
      id: 'bairro',
      label: 'Bairro',
      type: 'text',
    },
    {
      id: 'cidade',
      label: 'Cidade',
      type: 'text',
    },
    {
      id: 'estado',
      label: 'Estado',
      type: 'text',
    },
  ];

  const forms = formFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: '',
    };
  }, {});

  const [form, setForm] = React.useState(forms);

  const [response, setResponse] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            type={field.type}
            name={field.id}
            value={form[field.id]}
            onChange={handleChange}
          />
        </div>
      ))}

      {response && response.ok && <p>Formulário Enviar</p>}
      <button>Enviar</button>
    </form>
  );
};

/**
 * TextArea
 */

const App4 = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows={5}
      />
    </form>
  );
};

/**
 * Select
 */

const App5 = () => {
  const [select, setSelect] = React.useState('');

  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecinone
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

/**
 * Radio
 */

const App6 = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <h2>Dispositivo</h2>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={produto === 'notebook'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          checked={produto === 'smartphone'}
          onChange={({ target }) => setProduto(target.value)}
        />
        Smartphone
      </label>

      <h2>Cor</h2>
      <label>
        <input
          type="radio"
          value="azul"
          checked={cor === 'azul'}
          onChange={({ target }) => setCor(target.value)}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          value="vermelho"
          checked={cor === 'vermelho'}
          onChange={({ target }) => setCor(target.value)}
        />
        Vermelho
      </label>
    </form>
  );
};

/**
 * Checkbox 1 item
 */

const App7 = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <form>
      {termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        Aceito os termos...
      </label>
    </form>
  );
};

/**
 * Checkbox com vaios itens
 */

const App8 = () => {
  const [cores, setCores] = React.useState(['azul', 'vermelho']);

  function handleChange({ target }) {
    const { checked, value } = target;

    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }

    console.log(cores);
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={checkColor('vermelho')}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
};

/**
 * Checkbox com vaios itens
 */

const App9 = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;

    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            id={cor}
            type="checkbox"
            checked={checkColor(cor)}
            value={cor}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      {cores}
    </form>
  );
};

/**
 * Component Input
 */

const App10 = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input
        id="nome"
        label="Nome"
        type="text"
        value={nome}
        setValue={setNome}
        required
      />
      <Input
        id="senha"
        label="Senha"
        type="password"
        value={email}
        setValue={setEmail}
      />
      <button>Enviar</button>
    </form>
  );
};

/**
 * Component Select
 */

const App11 = () => {
  const [produto, setProduto] = React.useState('');

  return (
    <Select
      options={['smartphone', 'tablet']}
      value={produto}
      setValue={setProduto}
    />
  );
};

/**
 * Component Options
 */

const App12 = () => {
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};

/**
 * Component Checkbox
 */

const App13 = () => {
  const [linguagens, setLinguagens] = React.useState([]);

  return (
    <form action="">
      <Checkbox
        options={['Javascript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
    </form>
  );
};

/**
 * Validação sem Hooks
 */

const App14 = () => {
  const [cep, setCep] = React.useState('');
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um cep válido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Cep"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

/**
 * Validação com Hooks
 */

const App15 = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('');
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="text" {...email} />
      <Input label="Nome" id="nome" type="text" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
      <button>Enviar</button>
    </form>
  );
};

/**
 * Desafio Form
 */

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App16 = () => {
  const respostasCertas = perguntas.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: [field.resposta],
    };
  }, {});

  const [respostas, setRespostas] = React.useState(respostasCertas);
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio2
          active={slide === index}
          key={pergunta.id}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          {...pergunta}
        />
      ))}
      <br />

      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Proximo</button>
      )}
    </form>
  );
};

export default App16;
