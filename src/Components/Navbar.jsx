import React, { useState } from "react";
import Button from "./Btn3"; // Assuming Button3 is now Button for languages
import Button4 from "./Btn4"; // Assuming Button4 is used for the sliding menu links

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Language buttons data
  const languages = [
    { text: "hindi", id: 1 },
    { text: "telugu", id: 2 },
    { text: "tamil", id: 3 },
  ];

  // Main Menu items data
  const menuItems = [
    { text: "HOME", id: 1 },
    { text: "APK", id: 2 },
    { text: "My Watch List", id: 3 },
    { text: "Advanced Search", id: 4 },
    { text: "Continue Watching", id: 5 },
    { text: "SUBBED", id: 6 },
    { text: "DUBBED", id: 7 },
    { text: "HINDI DUBBED", id: 8 },
    { text: "TELUGU DUBBED", id: 9 },
    { text: "TAMIL DUBBED", id: 10 },
    { text: "MALAYALAM DUBBED", id: 11 },
    { text: "BENGALI DUBBED", id: 12 },
  ];

  const extraMenuItems = [
    {
      text: "Trending Anime",
      href: "../trendinganime",
      svg: (
        <svg className="extra-menu-svg" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#c03535">
          <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"/>
        </svg>
      ),
      color: "#c03535"
    },
    {
      text: "Top Airing",
      href: "../topairing",
      svg: (
        <svg className="extra-menu-svg" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#209720">
          <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160 384 160z"/>
        </svg>
      ),
      color: "#209720"
    },
    {
      text: "Best Rated Anime",
      href: "../bestratedanime",
      svg: (
        <svg className="extra-menu-svg" width="16" height="16" fill="#C3AC7B" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0l1.58 5.03L16 6l-4 3.09L12.09 16 8 12.74 3.91 16l.82-6.91L0 6l5.42-.97L8 0z" />
        </svg>
      ),
      color: "#C3AC7B"
    },
    {
      text: "Most Viewed Anime",
      href: "../mostviewedanime",
      svg: (
        <svg className="extra-menu-svg" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#b99cc6">
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
        </svg>
      ),
      color: "#b99cc6"
    },
    {
      text: "Best Movies",
      href: "../bestmovies",
      svg: (
        <svg className="extra-menu-svg" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#10d0e4">
          <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/>
        </svg>
      ),
      color: "#10d0e4"
    },
  ];

  const genres = [
    { name: "#Action", href: "../action" },
    { name: "#Drama", href: "../drama" },
    { name: "#Psychological", href: "../psychological" },
    { name: "#Romance", href: "../romance" },
    { name: "#Comedy", href: "../comedy" },
    { name: "#Slice of Life", href: "../sliceoflife" },
    { name: "#Sci-Fi", href: "../scifi" },
    { name: "#Supernatural", href: "../supernatural" },
    { name: "#Ecchi", href: "../ecchi" },
    { name: "#Mystery", href: "../mystery" },
    { name: "#Sports", href: "../sports" },
    { name: "#Music", href: "../music" },
    { name: "#Mecha", href: "../mecha" },
    { name: "#Adventure", href: "../adventure" },
    { name: "#Thriller", href: "../thriller" },
    { name: "#Horror", href: "../horror" },
    { name: "#Fantasy", href: "../fantasy" },
    { name: "#Mahou Shoujo", href: "../mahoushoujo" },
  ];
  


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <nav className="relative flex bg-[#000201] items-center text-2xl font-bebas justify-between px-8 py-5">
      {/* Background Blur */}
      <div
        className={`fixed inset-0 transition-all duration-300 ${menuOpen ? "backdrop-blur-md z-10" : ""} pointer-events-none`}
      ></div>

      {/* Left Section (Logo and Hamburger Icon) */}
      <div className="part1 flex text-[#1BE887] items-center gap-5">
        <button className="hamburger" aria-label="Open menu" onClick={toggleMenu}>
          <span className="icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1BE887" width="30" height="30" viewBox="0 0 48 48">
              <path d="M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z"></path>
            </svg>
          </span>
        </button>
        <div className="logo">
          <span className="uppercase text-4xl md:text-5xl">Anime</span>
        </div>
      </div>

      {/* Right Section (Languages and Search) */}
      <div className="part2 -tracking-tight cursor-pointer text-[#ffffffb3] flex items-center justify-center gap-4">
        <div className="langs hidden md:flex g">
          {languages.map((lang) => (
            <div key={lang.id} className="hover:bg-[#1BE887] py-2 transition-colors duration-100 ease-in-out hover:text-black">
              <Button text={lang.text} />
            </div>
          ))}
        </div>

        <button className="search" aria-label="Search">
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </span>
        </button>
      </div>

      {/* Sliding Menu */}
      <div className={`fixed top-0 left-0 w-full h-full transform transition-transform duration-300 ease-in-out z-20 ${menuOpen ? "translate-x-0" : "-translate-x-full"} overflow-hidden`}>
          <div className="flex flex-col w-full text-sm font-Mons gap-4 p-6 h-full">
              <div className="menu-top flex justify-between">
                  <div className="logo px-16 font-bebas text-4xl text-[#9CB1A7]">Anime</div>
                  <button onClick={toggleMenu} aria-label="Close menu">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M18 6L6 18M6 6l12 12" stroke="#9CB1A7" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                  </button>
              </div>

              {/* Dynamic Menu Options */}
              <div className="menu-options text-lg w-[300px] sm:w-[330px] bg-[#00000033] flex flex-col overflow-y-auto max-h-[calc(100vh-100px)] scrollbar-hide">
                  {menuItems.map((item) => (
                      <a key={item.id} href="#" className="text-[#ffffffb3]  p-1 border-t-[2px] border-[#ffffff1a]">
                          <Button4 text={item.text} />
                      </a>
                  ))}

                  {/* Extra menu items with SVGs */}
                  <div className="more-in-data-in-menu px-5 border-t-[2px] py-5 border-[#ffffff1a] ">
                      {extraMenuItems.map((item) => (
                          <div key={item.text} className="data-in-menu-2">
                              <a className="anchor-in-menu text-[16px] md:text-[20px] p-2 items-center  font-sans flex  gap-2" href={item.href} style={{ color: item.color }}>
                                  {item.svg}
                                  <span className="">{item.text}</span>
                              </a>
                          </div>
                      ))}
                  </div>

                  {/* genres and categorys */}
                  <div className="more-in-data-in-menu px-[26px]">
                    <h1 className="text-[#1be887] text-2xl font-sans mb-4">Genres</h1>
                    <div className="flex flex-wrap gap-[6px]">
                      {genres.map((genre, index) => (
                        <a 
                          key={index} 
                          href={genre.href} 
                          className="genre-button text-[#ffffffb3] text-[16px] font-sans hover:text-[#1ce783] px-2 py-1 border border-[#4f4f4f] rounded-md"
                        >
                          {genre.name}
                        </a>
                      ))}
                    </div>
                  </div>

              </div>
          </div>
      </div>

    </nav>
  );
}

export default Navbar;
