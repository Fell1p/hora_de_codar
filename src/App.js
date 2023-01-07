// Arquivo JSX responsavel por organizar, reaproveitar e reindenizar o componentes

import './App.css';
import Condicional from './components/Condicional';

function App() { //Componente responsavel pela reindenização dos componentes que compoem a aplicação

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <h1>Rendenização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;