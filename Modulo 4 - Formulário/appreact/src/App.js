import React from 'react';
import Input from './Form/input';
import Select from './Form/select';
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

export default App11;
