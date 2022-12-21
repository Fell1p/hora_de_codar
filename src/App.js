import './App.css';
import HellWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Dani"

  return ( //nome utilizada a props crianda em SayMyName para utilizar sua propriedade e assim tornar o arquivo dinamico

    <div className="App">
      <SayMyName nome="Felipe"/> 
      <SayMyName nome={nome}/>
      <Pessoa nome="Felipe" idade="27" profissao="Analista" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;