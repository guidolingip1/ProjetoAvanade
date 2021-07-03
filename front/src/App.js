import './App.css';
import CriaPostagem from './components/CriaPostagem';
import EntradaNome from './components/EntradaNome';
import ListaPostagens from './components/ListaPostagens';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
          <Switch>

            <Route exact path="/">
              <EntradaNome/>
            </Route>
            
            <Route exact path="/postagens">
              <CriaPostagem/>
              <ListaPostagens/>
            </Route>

          </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;
