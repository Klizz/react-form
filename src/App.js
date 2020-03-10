import React from "react";
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    
      <div className="container">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/about" component={ About } />
            </Switch>
          </div>
        </Router>
      </div>
  );
};

export default App;
