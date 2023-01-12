// Arquivo JSX responsavel por organizar, reaproveitar e reindenizar o componentes

import './App.css';
import OutraLista from './components/OutraLista'

function App() { //Componente responsavel pela reindenização dos componentes que compoem a aplicação

  const meusItens = ['React', 'Angular', 'Vue']

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <h1>Rendenização Condicional</h1>
      <OutraLista itens={meusItens} />
    </div>
  );
}

export default App;