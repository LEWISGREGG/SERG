import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import stocks from "../stocks.json"
import './HomePage.css';
import Stock from './Stock';
import StockCrawler from '../components/StockCrawler';


function HomePage() {

 return (
  <div>
    <Navbar/>
    <StockCrawler/>

  <div id="search_bar">
          <section className='search_section'>
        <h4 className='heading_text'>
          Hot stocks to watch
        </h4>
          </section>
</div>
    
    <div className="HomePage">
          {stocks.map((stock) => (
            <Stock key={stock._id} stock={stock}></Stock>
          ))}
        </div>
    <Footer/>
  </div>
)
}

export default HomePage
