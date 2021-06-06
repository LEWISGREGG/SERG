import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['FTXP', 'JAMN', 'SUTI', 'AHFD', 'FONU', 'EFIR', 'VGID', 'NBRI', 'BCAP', 'PRMO', 'SEEK', 'GEGP', 'ICTY', 'TXTM', 'AFOM', 'WSFT', 'WRFX', 'ASKE', 'GMPW', 'NUUU', 'NNRX']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;