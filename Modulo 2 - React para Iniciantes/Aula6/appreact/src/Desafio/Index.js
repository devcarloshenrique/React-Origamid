import React from 'react';
import Home from './Home';
import Menu from './Menu';
import Produtos from './Produtos';

const Index = () => {
  const { pathname } = window.location;

  let Component;

  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <div>
      <Menu />
      <Component />
    </div>
  );
};

export default Index;
