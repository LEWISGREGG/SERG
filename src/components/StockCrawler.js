import StockCrawler from 'react-stock-crawler/dist';

function Crawler() {
  return (
   <div className="StockCrawler">
    <StockCrawler stocks={['FTXP', 'JAMN', 'SUTI', 'TGRO', 'FONU', 'EFIR', 'VGID', 'NBRI', 'BCAP', 'BEHL', 'SEEK', 'SDVI', 'ICTY', 'ITVI', 'TWOH', 'RDAR', 'WRFX', 'PDGO', 'FUTL', 'NUUU', 'NNRX']} apiKey={"c1ehs7748v6pretcu1gg"} />
   </div>
  );
}

export default Crawler;