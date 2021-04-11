import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import StockPage from './pages/StockPage';
import CoinApp from './pages/CoinApp';

function App() {
  return (
     <>
      <Router>  
        <Switch> 
          <Route path='/' exact component={HomePage} />            
          <Route path="/stock/:id" component={StockPage}></Route>
          <Route path="/crypto" component={CoinApp}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
