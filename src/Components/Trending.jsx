import React, { useState, useEffect } from "react";

const Trending = () => {
  const animeTitles = [
    "#Naruto: Shippuden",
    "#Solo Leveling",
    "#Kaiju No.8",
    "#One Piece",
    "#Dragon Ball",
    "#Wind Breaker",
    "#Jujutsu Kaisen Season 2",
    "#Boruto: Naruto Next Generations",
    "#Naruto",
    "#Bleach"
  ];

  const [shortenedTitles, setShortenedTitles] = useState(animeTitles);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // 'sm' breakpoint in Tailwind is 640px
        const newTitles = animeTitles.map((title) => {
          return title.length > 15 ? title.slice(0, 12) + "..." : title; // Shorten titles
        });
        setShortenedTitles(newTitles);
      } else {
        setShortenedTitles(animeTitles);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set state based on current window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="p-4 w-fullrounded-lg shadow-md">
      <span className="text-white w-fit font-Mons font-bold text-md">Trending :</span>
      <ul className="flex flex-wrap gap-1 mt-1">
        {shortenedTitles.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="text-[#21E2AD] font-sans text-[12px] md:text-sm hover:underline transition duration-300"
          >
            {item}
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Trending;
