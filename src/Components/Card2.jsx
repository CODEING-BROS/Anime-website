import React from 'react';

const Card2 = () => {
  return (
    <div className='anime-dubbed relative'>
      <a href="#" className='p-4 rounded-[20px] transition-all duration-500 w-full relative overflow-hidden'>
        <div className="dubbed-info w-full h-full rounded-[20px] overflow-hidden">
          <div className="play-icon w-9 h-9 rounded-full absolute right-[10px] -bottom-[40px] flex items-center justify-center z-10 transition-all duration-500 bg-[#1ce783]">
            <svg fill='#000' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
            </svg>
          </div>
          <div className="more-data-container flex flex-col h-full w-full">
            <div className="img-container-dubbed h-[200px] w-full overflow-hidden relative rounded-[20px]">
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.7)] blur-md" />
              <img
                className='w-full object-cover transition-all duration-1000 z-10'
                src="https://hiddenleaf.to/images/Naruto-img.jpg"
                alt=""
              />
            </div>
            <div className="data-container-dubbed transition-all duration-1000 w-full h-[40%] flex flex-col justify-between overflow-y-hidden py-[10px] ">

            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card2;
