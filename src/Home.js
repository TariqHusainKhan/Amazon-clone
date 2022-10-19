import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
   <div className="home">
      <div className="home__container">
         <img className="home__image"
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
         alt=""
         />
         <div className="home__row">
           <Product title="Relentless: From Good to Great to Unstoppable"
             price={1050}
             image="https://m.media-amazon.com/images/I/61MIRG1NvzL._AC_UL480_FMwebp_QL65_.jpg"
             rating={5}
           />
           <Product title="2020 Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (Renewed)"
             price={43000}
             image="https://m.media-amazon.com/images/I/81a-vuydLTL._AC_UL480_FMwebp_QL65_.jpg"
             rating={4}
           />
         </div>

         <div className="home__row">
         <Product title="boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours Playback, 50MM Drivers, Soft Padded Ear Cushions and Physical Noise Isolation (Red)"
             price={3800}
             image="https://m.media-amazon.com/images/I/61ljxTBpTCL._AC_UL480_FMwebp_QL65_.jpg"
             rating={4}
           />
            <Product title="Apple Watch SE (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
             price={24000}
             image="https://m.media-amazon.com/images/I/81ww7fpkNHL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
           />
            <Product title="Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Backlit Gaming Mouse 3200 DPI for Windows PC Gamers"
             price={3999}
             image="https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
           />
          
         </div>

         <div className="home__row">
         <Product title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
             price={158000}
             image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
           />
            <Product title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
             price={158000}
             image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
             rating={5}
           />
         </div>

      </div>
   </div>
  );
};

export default Home;