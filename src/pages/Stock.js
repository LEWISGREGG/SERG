import React from 'react'
import { Link } from 'react-router-dom';
import './Stock.css';
export default function Stock(props) {
  const { stock } = props;
  return (
    <Link to={`/stock/${stock._id}`}>
    <div key={stock._id} className="CardWrapper"> 
          <h5>{stock.title}</h5>
          <p>{stock.alert}</p>
          <h3>RSI: {stock.rsi}</h3>
          <h1>{stock.value}</h1>
          <h3>OS: {stock.os}</h3>
          
          <h3>{stock.status}</h3>
          <h2>{stock.catalyst}</h2>
      
    </div>
    </Link>

  );
}