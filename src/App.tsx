import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle } from './Global/global';
import Formulario from './components/Fomulario.test.tsx/Formulario'
import Cabecalho from './components/Header/Cabecalho';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Cabecalho/>
      <Formulario/>
    </>
  );
}

export default App;
