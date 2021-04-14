import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'MLHC', 'HPIL', 'BDGR', 'RSHN', 'EFIR', 'USMJ', 'MNGG', 'GRLF', 'PLYZ', 'HCMC', 'IGEX', 'ICNM', 'PRPM', 'CZNI', 'MTVX', 'PRMO', 'UVSE', 'TGRO', 'TBEV', 'SIML']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;