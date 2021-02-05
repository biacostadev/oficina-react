import './App.css';
import User from './Components/User'

const Users = [
  {
    nome: "Isa",
    description: "Maravilhosa"
  },
  {
    nome: "Cintia",
    description: "Incrível"
  },
  {
    nome: "Moni",
    description: "Zero defeitos"
  }
]

function App() {
  return (
    <div className="App">
      <User nome={Users[0].nome} description={Users[0].description}/>
      <User nome={Users[1].nome} description={Users[1].description}/>
      <User nome={Users[2].nome} description={Users[2].description}/>
    </div>
  );
}

export default App;
