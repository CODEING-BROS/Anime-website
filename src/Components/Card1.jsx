import React from 'react';
import { assets } from '../../public/assets';

const Card1 = ({img , rank}) => {
  return (
    <div className="">
      <div className="anime-in-trend min-h-[300px] min-w-[200px] relative overflow-hidden rounded-lg">
        <div className=" z-20 px-[3px] absolute top-[65%] left-4">
          <span className="font-pops font-bold rank text-[#D6D7D6] text-[55px]">
            <strong>{rank}</strong>
          </span>
        </div>
        <div className="image-container w-full h-full overflow-hidden relative">
          <a className="w-full h-full block relative" href="#">
            {/* Example Image with hover zoom effect */}
            <img
              src={img}
              alt="Anime Trend"
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-[1.18]"
            />
            {/* Background gradient */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10 pointer-events-none"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card1;
