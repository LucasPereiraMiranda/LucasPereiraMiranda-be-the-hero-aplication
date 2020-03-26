import React from 'react';
import './global.css'
import Routes from './routes';

/* componente: função javascript que retorna html*/
/* jsx: linguagem utilizada no React para mesclar html e javascript*/
/* propiedade: argumento enviado pelo componente React*/
/* estado: e a informação mantida pelo componente*/
/* imutabilidade: o React nao modifica uma variavel (usamos constates e o useState)*/

function App() {
  return (
    <Routes />
  );
}

export default App;
