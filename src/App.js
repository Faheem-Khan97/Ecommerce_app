import React from 'react';
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path = "/" exact>
          <Header/>
          <Home/>
        </Route>
        <Route path = "/checkout">
          <Header/>
          <h1>Checkout Page</h1>
        </Route>
      

      {/*Header*/}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
