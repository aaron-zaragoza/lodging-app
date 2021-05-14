import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage';

const Router = require("react-router-dom").Router;
const Route = require("react-router-dom").Route;
const Switch = require("react-router-dom").Switch;

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
