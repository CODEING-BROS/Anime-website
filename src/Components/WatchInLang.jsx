import React from 'react';
import LangBtn from './LangBtn';

const data = [
  {
    Language: "Hindi",
    img: "https://hiddenleaf.to/images/profileImages/Luffy.webp",
    Character: "Luffy"
  },
  {
    Language: "English",
    img: "https://hiddenleaf.to/images/profileImages/goku.webp",
    Character: "Goku"
  },
  {
    Language: "Japanese",
    img: "https://hiddenleaf.to/images/profileImages/naruto.webp",
    Character: "Naruto"
  },
  {
    Language: "Telugu",
    img: "https://hiddenleaf.to/images/profileImages/sanji.webp",
    Character: "Vegeta"
  },
  {
    Language: "Malayalam",
    img: "https://hiddenleaf.to/images/profileImages/zoro.webp",
    Character: "Zoro"
  },
  {
    Language: "Bengali",
    img: "https://hiddenleaf.to/images/profileImages/gojo.webp",
    Character: "Gojo"
  },
];

const WatchInLang = () => {
  return (
    <div className="btns w-full  ">
      <div className="text-white ">
        <h1 className="text-4xl pb-5 site-qsn leading-none font-bebas">
          Explore Anime in Your Language
        </h1>
        <p className="text-md site-ans text-[#21E2AD] font-Mons ">
          Choose your preferred language and watch the best anime with iconic characters.
        </p>
      </div>
      <div className="w-full">
        {data.map((item, index) => (
          <div key={index} className="flex mt-4 flex-col justify-center items-center"> 
            <LangBtn image={item.img} lang={item.Language} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchInLang;
