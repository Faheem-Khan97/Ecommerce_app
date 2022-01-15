import React, {useEffect} from 'react';
import Header from './Header'
import Home from './Home'
import {Checkout} from './Checkout'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { Login } from './login';
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'
import { useStateValue } from './stateProvider';


function App() {

  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    document.title = "Amazon.com"
    onAuthStateChanged(auth, (authenticatedUser) => {
      console.log(authenticatedUser);
      if(authenticatedUser){
        dispatch({
          type:"SET_USER",
          user:authenticatedUser

        })
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null

        })
      }
    })
    return () => {
      
    }
  }, [])
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path = "/login" exact>
          <Login/>
        </Route>
        <Route path = "/" exact>
          <Header/>

          <Home/>
        </Route>
        <Route path = "/checkout">
          <Header/>

          <Checkout/>
        </Route>
      

      {/*Header*/}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
