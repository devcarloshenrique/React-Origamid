// Fetch

fetch('https://api.github.com/')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

// Promises

async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

const produtos = fetchProdutos('https://api.github.com/');

console.log(produtos);
