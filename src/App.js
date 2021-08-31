import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">

      <Navbar />

      <Router>

        <Switch>

          <Route path='/'>
            <Homepage />
          </Route>
          
        </Switch>

      </Router>

    </div>
  );
}

export default App;
