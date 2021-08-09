import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import PokemonDetail from './components/Detail/PokemonDetail';
import { Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    
    <div className="App">

      <NavBar />


      <Route exact path="/" component= {Home}></Route>

      <Route exact path="/:id" component= {PokemonDetail}></Route>


    </div>
  );
}

export default App;
