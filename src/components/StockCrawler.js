import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'MLHC', 'RSHN', 'BDGR', 'RSHN', 'EFIR', 'IGEX', 'MNGG', 'GRLF', 'PLYZ', 'MDCN', 'BSSP', 'ICNM', 'PRPM', 'CZNI', 'MTVX', 'PRMO', 'UVSE', 'TGRO', 'QBAN', 'SIML']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;