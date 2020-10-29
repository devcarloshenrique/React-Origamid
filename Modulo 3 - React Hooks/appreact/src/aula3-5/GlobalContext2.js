import React from 'react';

export const GlobalContext2 = React.createContext();

export const GlobalStorage2 = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }
  return (
    <GlobalContext2.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext2.Provider>
  );
};
