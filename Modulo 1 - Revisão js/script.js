// Tudo é objeto -> javacript

const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

// Funcion normal

function upperName(name) {
  return name.toUpperCase();
}

// Arrow funcion
const lowerName = (name) => {
  return name.toLowerCase();
};

// Função anonima

const upper = function (name) {
  return name.toUppercase();
};

// Destructuring

function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log(clientX, clientY);
}

document.addEventListener('click', handleMouse);

// Destructuring Array

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;
// Destructuring função

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

//Operador Rest

function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'Andre', 'Rafael');

// Operador Spread

const numeros = [1, 2, 3, 4, 5];
const maior = Math.max(...numeros);

console.log(maior);

// Juntando arrays

const numeros2 = [10, 14, 15, ...numeros, 1, 2, 5, 6, 7];

console.log(numeros2);

// Exemplo de operador rest com objeto

const carro = {
  cor: 'Azul',
  portas: 4,
};

const carroAno = { ...carro, ano: 2020 };

console.log(carroAno);
