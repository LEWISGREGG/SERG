import React from 'react'
import data from '../data';
import './StockPage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
export default function StockPage(props) {
  const stock = data.stocks.find((x) => x._id === props.match.params.id);
  if (!stock) {
    return <div> Stock Not Found</div>;
  }
  return (
    <div className="stock_top">
    <Navbar/>
    <div id="stockpage_bar">
          <section className='stockpage_section'>
        <p className='heading'>
          ${stock.title}
        </p>
        <div className="heading"> <iframe src={stock.target} width="10%" height="45" ></iframe></div>

          </section>
</div>
      <div className="row top">

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Latest Twitter Info</div>
                </div>
              </li>

              <li>
                <a href={stock.twitter}><button className="primary block">Twitter Screen</button></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Latest Chart Info</div>
                </div>
              </li>
              <li>
                <a href={stock.chart}><button className="primary block">Chart Screen</button></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Latest Level III Info</div>
                </div>
              </li>
              <li>
                <a href={stock.leveltwo}><button className="primary block">Level III Screen</button></a>
              </li>
            </ul>
          </div>
        </div>


        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Latest Fillings Info</div>
                </div>
              </li>
              <li>
                <a href={stock.fillings}><button className="primary block">Fillings Screen</button></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Latest News</div>
                </div>
              </li>
              <li>
                <a href={stock.news}><button className="primary block">News Screen</button></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Trade Info</div>
                </div>
              </li>
              <li>
                <a href={stock.price}><button className="primary block">Stock Screen</button></a>
              </li>
            </ul>
          </div>
        </div>


      </div>
   <Footer/>
    </div>
  );
}
