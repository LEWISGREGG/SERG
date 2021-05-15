import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'TGGI', 'HPNN', 'BDGR', 'FONU', 'EFIR', 'VGID', 'ONCI', 'GRLF', 'GDET', 'SEEK', 'BSSP', 'ICTY', 'TXTM', 'CZNI', 'HBRM', 'WRFX', 'HVCW', 'MRNJ', 'QBAN', 'NNRX']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;