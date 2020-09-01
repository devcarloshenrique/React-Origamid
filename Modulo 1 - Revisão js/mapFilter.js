const precos = [
  'Credito',
  'R$ 200',
  'R$ 200',
  'Contas Pagar',
  'R$ 200',
  'R$ 200',
  'Meus dados',
];

const precosFiltro = precos.filter((p) => p.includes('R$'));

const precosNumeros = precosFiltro.map((p) => Number(p.replace('R$', '')));

console.log(precosNumeros);
