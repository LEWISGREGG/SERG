import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'TGGI', 'HPNN', 'BDGR', 'FONU', 'EFIR', 'VGID', 'NBRI', 'USMJ', 'GDET', 'SEEK', 'HVCW', 'ICTY', 'TXTM', 'AFOM', 'HBRM', 'WRFX', 'HVCW', 'DRNK', 'QBAN', 'NNRX']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;