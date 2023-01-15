// Arquivo JSX responsavel por organizar, reaproveitar e reindenizar o componentes
import {useState} from 'react';
import './App.css';
import SeuNome from './components/SeuNome'

function App() { //Componente responsavel pela reindenização dos componentes que compoem a aplicação

  const [nome, setNome] = useState()

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      {nome}
    </div>
  );
}

export default App;