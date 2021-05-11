import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        {/* HEADER */}
        <Header />
        {/* END HEADER */}
        {/***** ROUTES *****/}
        <Switch>
          {/* HOME */}
          <Route path="/">
            <Home />
          </Route>
          {/* SEARCH */}
          <Route path="search">
            <SearchPage />
          </Route>
        </Switch>
        {/***** END ROUTES *****/}
        {/* FOOTER */}
        <Footer />
        {/* END FOOTER */}
      </Router>
    </div>
  );
}

export default App;
