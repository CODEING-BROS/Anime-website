import React from 'react';

import { assets } from '../../public/assets';
import Input from '../Components/Input';
import Trending from '../Components/Trending';
import WatchInLang from '../Components/WatchInLang';
import Faq from '../Components/Faq';
import Footer from '../Components/Footer';
import ViewSiteButton from '../Components/ViewSieBtn';


const Header = () => {
  return (
    <div className='w-full h-screen bg-[#191919] '>
      <div
        className="background-container bg-[#191919] h-[700px]" 
        style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)), url(${assets.background})`,
        backgroundSize: 'cover',
        paddingBlock:'10px',
        backgroundPosition: 'center',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        }} 
      >
        <div className="wrapper flex items-center w-full h-full justify-center">
          <div className="top w-full flex justify-center items-center">
            <div className="container py-4 w-[650px] h-full ">
              <p className="logo text-center font-bebas  text-[#21E2AD]  text-[5rem]  md:text-[7rem] ">Anime </p>
              <div className="search w-full ">
                 <div className="search-bar flex 6 w-full justify-center">
                    <Input />
                 </div>

                <div className="top-searches items-center w-full  flex gap-2">
                  <Trending />
                </div>
              </div>
              <div className=" font-Mons  py-8">
                <ViewSiteButton text={'View Site'} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bottom-conatainer  px- bg-[#191919]">
          <div className="flex p-10  gap-10 bottom-top  bg-[#191919] ">
            {/* Best Anime Info Section */}
            <div className="best w-[70%]">
              <h1 className="text-white font-bebas site-qsn text-4xl">
                The best site to watch anime in Hindi, Telugu, Tamil, Malayalam, Bengali online for Free
              </h1>
              <p className="text-[#ffffff99] site-ans  font-Mons text-lg pt-5 ">
                  Anime has captured the hearts of fans worldwide, generating over a billion monthly searches for anime content. Despite the growing demand, many streaming platforms fall short with limited libraries, disruptive ads, or slow streaming speeds.

                  That's where **Anime** steps in. Our mission is to create the ultimate free anime streaming platform, offering an extensive collection of beloved series and hidden gems—all in HD and available in languages like Hindi, Telugu, Tamil, Malayalam, and Bengali. We focus on providing a seamless, ad-free viewing experience across devices, ensuring that language barriers or technical issues never stand between you and your favorite shows.

                  Whether you're binge-watching the latest episodes or exploring classic series, **Anime** makes it easy for both new and seasoned fans to access high-quality anime content. Join us for an immersive experience and explore the world of anime, free of charge, whenever and wherever you want!
              </p>
            </div>

            {/* WatchInLang Section */}
            <div className=" w-[30%] info langs flex  justify-center">
              <WatchInLang />
            </div>
          </div>

          {/* FAQ Section */}
          <Faq />
      </div>

      <div className="footer">
        <Footer />
      </div>


    </div>
  );
};

export default Header;
