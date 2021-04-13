import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'MLHC', 'NOUV', 'BDGR', 'RSHN', 'EFIR', 'BCAP', 'MNGG', 'GRLF', 'VGID', 'HCMC', 'NUUU', 'ICNM', 'PRPM', 'IHSI', 'MTVX', 'PRMO', 'UVSE']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;