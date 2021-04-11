import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'MLHC', 'NOUV', 'BDGR', 'RSHN', 'SIML', 'BCAP', 'MNGG', 'QBAN', 'VGID', 'MMEX', 'NUUU', 'ICNM', 'ETEK', 'OCLG']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;