// Arquivo JSX responsavel por organizar, reaproveitar e reindenizar o componentes

import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase/index.js';
import List from './components/List';

function App() { //Componente responsavel pela reindenização dos componentes que compoem a aplicação

  const nome = "Dani"

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Felipe"/> 
      <SayMyName nome={nome}/>
      <Pessoa 
        nome="Felipe" i
        dade="27" 
        profissao="Analista"
        foto="https://via.placeholder.com/150" />
      <List />
    </div>
  );
}

export default App;