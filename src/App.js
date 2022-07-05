import { Download, Features, SectionWrapper } from "./components";

import assets from './assets'

const App = () => {
  return (
    <>
      
      <SectionWrapper
        title="You own store of Nifty NFTs. Start Selling \& Growing"
        description="buy, store, collect NFTs, exchange & earn crypto. Join 25+ milion people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
    </>
  );
}

export default App;
