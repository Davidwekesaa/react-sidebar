import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';


function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products" exact component={Products}/>
         <Route path="/report" exact component={Reports}/>
        
        </Switch>
    </Router>
      
    </>
  );
}

export default App;
