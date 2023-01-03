// Arquivo JSX responsavel por organizar, reaproveitar e reindenizar o componentes

import './App.css';
import Evento from './components/Eventos'
import Form from './components/Form';

function App() { //Componente responsavel pela reindenização dos componentes que compoem a aplicação

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero = '1' /> 
      <Evento numero = '2' />
      <Form />
    </div>
  );
}

export default App;