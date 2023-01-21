import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Service from "./components/Pages/Service";
import Gallery from "./components/Pages/Gallery";
import NoPage from "./components/Pages/NoPage";
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about"  component={About} />
        <Route path="/services"  component={Service} />
        <Route path="/gallery"  component={Gallery} />
        <Route path="*"  component={NoPage} />
      </Switch>
    </div>
  );
}

export default App;
