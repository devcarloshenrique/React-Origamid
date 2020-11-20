import React from 'react';
import styles from './Produto.module.css';

export const Produto = () => {
  console.log(styles);
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      {/** Maneira não recomendada*/}
      <p className={styles['preco-total']}>R$ 2000,00</p>
      {/**Maneira certa de fazer */}
      <button className={styles.comprarProduto}>Comprar</button>
    </div>
  );
};

export default Produto;
