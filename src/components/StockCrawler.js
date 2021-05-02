import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['GNCP', 'TGGI', 'RSHN', 'BDGR', 'UBQU', 'EFIR', 'VGID', 'ONCI', 'GRLF', 'GDET', 'MDCN', 'BSSP', 'ETEK', 'CELT', 'CZNI', 'HBRM', 'WRFX', 'MMEX', 'MRNJ', 'QBAN', 'NNRX']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;