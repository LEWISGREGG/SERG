import React from 'react'
import { Link } from 'react-router-dom';
import './Stock.css';
export default function Stock(props) {
  const { stock } = props;
  return (
    <Link to={`/stock/${stock._id}`}>
    <div key={stock._id} className="CardWrapper"> 
    
          <h3>{stock.author}</h3>
          <h2>{stock.title}</h2>
          <h1>{stock.value}</h1>

        <img className="medium" src={stock.image} alt={stock.title} />
    </div>
    </Link>

  );
}