import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../../public/assets';
import WatchButton from './Watchbtn';
import DetailButton from './details';


// Sample image paths from assets (adjust based on your assets folder structure)
const data = [
  {
    title: 'Demon Slayer: Kimetsu no Yaiba Hashira Training Arc Hindi Tamil Telugu',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Demon Slayer',
    summery: 'Adaptation of the Hashira Training Arc. The Hashira, the Demon Slayer Corps highest ranking swordsmen and members. The Hashira Training has begun in order to face the forthcoming battle against Muzan Kibutsuji. Each with their own thoughts and hopes held in their hearts, a new story for Tanjiro and the Hashira begins.',
    spolightNumber: '1',
    img: assets.slide1,
  },
  {
    title: 'Kaiju No.8 Telugu Hindi Tamil',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Kaiju No. 8',
    summery: 'With the highest kaiju-emergence rates in the world, Japan is no stranger to attack by deadly monsters. Enter the Japan Defense Force, a military organization tasked with the neutralization of kaiju. Kafka Hibino, a kaiju-corpse cleanup man, has always dreamed of joining the force. But when he gets another shot at achieving his childhood dream, he undergoes an unexpected transformation. How can he fight kaiju now that he’s become one himself?!',
    spolightNumber: '2',
    img: assets.slide5,
  },
  {
    title: 'Jujutsu Kaisen Hindi Telugu Tamil Dub',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Jujutsu Kaisen',
    summery: 'Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuj Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity.',
    spolightNumber: '3',
    img: assets.slide4,
  },
  {
    title: 'Solo Leveling Hindi Telugu Tamil Dub',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Solo Leveling',
    summery: 'They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.',
    spolightNumber: '4',
    img: assets.slide2,
  },
  {
    title: 'Naruto Shippuden Hindi Tamil Malayalam',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Naruto Shippuden',
    summery: 'It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.',
    spolightNumber: '5',
    img: assets.slide7,
  },
  {
    title: 'Hunter X Hunter Hindi Dub',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Hunter X Hunter',
    summery: 'Hunter x Hunter is set in a world where Hunters exist to perform all manner of dangerous tasks like capturing criminals and bravely searching for lost treasures in uncharted territories. Twelve-year-old Gon Freecss is determined to become the best Hunter possible in hopes of finding his father, who was a Hunter himself and had long ago abandoned his young son.',
    spolightNumber: '6',
    img: assets.slide3,
  },
  {
    title: 'My Hero Academia Hindi Telugu Tamil Malayalam Dub',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'My Hero Academia',
    summery: 'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
    spolightNumber: '7',
    img: assets.slide6,
  },
  {
    title: 'Spy X Family Hindi Telugu Tamil Dub',
    type: 'T.V Series',
    episodeLength: '24 min',
    Name: 'Spy X Family',
    summery: 'Four members of the Din Republic\'s spy team Lamplight embark on a mission to capture an enemy spy. Although they struggle to work together due to their clashing personalities, Thea, Monika, Erna, and Annett complete their objective. Meanwhile, Klaus and Lily set out on an emergency expedition to locate their missing teammates.',
    spolightNumber: '8',
    img: assets.slide8,
  },
];


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  // Function to handle pagination click
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Automatically change the slide every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplied by 2 to increase drag sensitivity
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };


  const truncateSummary = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };
  

  return (
    <div
  id="default-carousel"
  className="relative w-full pointer-events-none"
  data-carousel="slide"
>
  {/* Carousel wrapper */}
  <div
    ref={sliderRef}
    className="relative w-full overflow-hidden carousel rounded-lg h-[650px]" // Added responsive height
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseLeave={handleMouseUp}
  >
    {data.map((item, index) => (
      <div
        key={index}
        className={`absolute block w-full h-full transition-transform duration-700 ease-in-out transform ${
          index === currentSlide ? 'translate-x-0' : 'translate-x-full'
        }`}
        data-carousel-item
      >
        {/* Gradient Divs */}
        <div
          className="absolute z-30 top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.7) 100%)',
          }}
        ></div>
        <div
          className="absolute z-40 top-0 left-0 w-full h-full pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.8) 20%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0.9) 100%)',
          }}
        ></div>

        {/* Image */}
        <img
          src={item.img}
          className="absolute block w-full h-full object-cover " // Ensures image fits and is centered
          alt={item.Name}
          style={{ objectFit: 'cover' }} // Keeps image proportionate without cutting off
        />

        {/* Slide Content */}
        <div className="absolute slide-content w-[70%] z-50 bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <span className="spotlight font-Mons">#{item.spolightNumber} Spotlight</span>
          <h2 className="text-6xl title-slider font-bebas">{item.title}</h2>
          <div className="flex items-center">
            <span className="flex md:my-2 gap-2 font-bold">
              •{' '}
              <span className="text-[#ffffffb3] flex type font-Mons text-sm">
                {item.type} <pre> </pre> {item.episodeLength}
              </span>{' '}
              •
            </span>
          </div>
          <p className="text-[#ffffffb3] slider-name font-bold flex font-Mons text-[12px] lg:text-[16px]">
            {item.Name}
          </p>
          <p className="text-[#ffffffb3] flex summery font-Mons mt-2 text-[12px] lg:text-[15px] font-bold">
            {truncateSummary(item.summery, 265)} {/* Adjust length for mobile */}
          </p>
          <div className="slider-btns flex items-center gap-5 lg:gap-8 pt-4 lg:pt-6">
            <div className="watchBtn w-fit pointer-events-auto">
              <WatchButton text={'Watch Now'} />
            </div>
            <div className="detail w-fit font-bebas pointer-events-auto">
              <DetailButton text={'Details'} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Pagination Dots */}
  <div className="absolute pagination top-[35%] lg:top-[30%] h-fit pointer-events-auto -right-[68px] lg:-right-[80px] flex justify-center space-x-5 rotate-90">
    {data.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`w-[12px] h-[12px] lg:w-[17px] lg:h-[17px] rounded-full transition-colors duration-300 ${
          currentSlide === index ? 'bg-[#1BE887]' : 'bg-[#737373]'
        }`}
      />
    ))}
  </div>

  {/* Carousel controls */}
  <button
    className="absolute controll-btn pointer-events-auto top-[88%] lg:top-[89%] right-4 z-30 flex items-center justify-center  px-4 cursor-pointer"
    onClick={prevSlide}
    data-carousel-prev
  >
    <span className="inline-flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#ffffff1a] hover:bg-[#1BE887]">
      <svg
        aria-hidden="true"
        className="w-4 h-4 lg:w-6 lg:h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button
    className="absolute controll-btn pointer-events-auto top-[80%] right-4 z-30 flex items-center justify-center  px-4 cursor-pointer"
    onClick={nextSlide}
    data-carousel-next
  >
    <span className="inline-flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#ffffff1a] hover:bg-[#1BE887]">
      <svg
        aria-hidden="true"
        className="w-4 h-4 lg:w-6 lg:h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

  );
};

export default Slider;