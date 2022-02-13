import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/header.component';

const HatsPage = ()=>{
  return(
    <div>
      
    <h1>Hats page </h1>
  </div>
  )
  
}

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
