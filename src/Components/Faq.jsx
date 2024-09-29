import React, { useState } from 'react';

const Faq = () => {
    const FAQ = [
        {
            qsn: "What is [our Company]",
            answer: [
                "Our company is a free site to watch anime, and you can even download Hindi Anime, Telugu Anime, Tamil Anime in ultra HD quality without any registration or payment.",
                "By having only one ad in all kinds, we are trying to make it the safest site for free anime."
            ]
        },
        {
            qsn: "In How many Languages can I Watch Anime?",
            answer: [
                <span key="lang-title"><strong>Languages Available:</strong> Our platform provides anime content in many languages including Hindi, Telugu, Tamil, Malayalam, and Bengali.</span>,
                <span key="hindi-title"><strong>Hindi Anime:</strong> Many Hindi Animes like Jujutsu Kaisen, Naruto, Code Geass: Lelouch of the Rebellion, Vinland Saga, My Hero Academia etc. for free without any Account and ad-free also. Hindi Dub is done by the Crunchyroll official makers.</span>,
                <span key="telugu-title"><strong>Telugu Anime:</strong> Many Telugu Animes like Vinland Saga, My Hero Academia, Naruto, Jujutsu Kaisen, My Dress Up Darling etc. for free without any Account and ad-free also. Telugu Dub is done by the Crunchyroll official makers.</span>,
                <span key="tamil-title"><strong>Tamil Anime:</strong> Many Tamil Animes like Jujutsu Kaisen, Naruto, Darling in the FranXX, Vinland Saga, My Hero Academia etc. for free without any Account and ad-free also. Tamil Dub is done by the Crunchyroll official makers.</span>,
                <span key="malayalam-title"><strong>Malayalam Anime:</strong> Many Malayalam Animes like Naruto, My Hero Academia etc. for free without any Account and ad-free also. Malayalam Dub is done by the Crunchyroll official makers.</span>,
                <span key="bengali-title"><strong>Bengali Anime:</strong> Many Bengali Animes like Naruto etc. for free without any Account and ad-free also. Bengali Dub is done by the Crunchyroll official makers.</span>
            ]
        },
        {
            qsn: "Is our company safe?",
            answer: [
                <span key="safety-title"><strong>Safety Assurance:</strong> Yes, we are. We do have only one ad to cover the server cost, and we keep scanning the ads 24/7 to make sure all are clean. If you find any ads that are suspicious, please forward us the info, and we will remove it.</span>
            ]
        },
        {
            qsn: "So what makes our site the best site to watch anime free online?",
            answer: [
                <span key="choose-title"><strong>Why Choose Us:</strong> Before building this platform, we've checked many other free anime sites and learned from them. We only keep the good things and remove all the bad things from all the competitors, to put it in our website. Let's see how we're so confident about being the best site for anime streaming:</span>,
                <span key="safety-title"><strong>Safety:</strong> We try our best to not have harmful ads on our site.</span>,
                <span key="content-title"><strong>Content library:</strong> Our main focus is anime. You can find here popular, classic, as well as current titles from all genres such as action, drama, kids, fantasy, horror, mystery, police, romance, school, comedy, music, game and many more. All these titles come with English subtitles or are dubbed in many languages.</span>,
                <span key="quality-title"><strong>Quality/Resolution:</strong> All titles are in excellent resolution, the best quality possible. This platform also has a quality setting function to make sure our users can enjoy streaming no matter how fast your Internet speed is. You can stream the anime at 360p if your Internet is being ridiculous, or if it is good, you can go with 720p or even 1080p anime.</span>,
                <span key="streaming-title"><strong>Streaming experience:</strong> Compared to other anime streaming sites, the loading speed is faster. Downloading is just as easy as streaming; you won't have any problem saving the videos to watch offline later.</span>,
                <span key="updates-title"><strong>Updates:</strong> We update new titles as well as fulfill the requests on a daily basis so be warned, you will never run out of what to watch on our site.</span>,
                <span key="ui-title"><strong>User interface:</strong> Our UI and UX makes it easy for anyone, no matter how old you are, how long you have been on the Internet. Literally, you can figure out how to navigate our site after a quick look. If you want to watch a specific title, search for it via the search box. If you want to look for suggestions, you can use the site's categories or simply scroll down for new releases.</span>,
                <span key="device-title"><strong>Device compatibility:</strong> Our platform works alright on both your mobile and desktop. However, we'd recommend you use your desktop for a smoother streaming experience.</span>,
                <span key="customer-title"><strong>Customer care:</strong> We are in active mode 24/7. You can always contact us for any help, query, or business-related inquiry. On our previous projects, we were known for our great customer service as we were quick to fix broken links or upload requested content. So if you're looking for a trustworthy and safe site for your Anime streaming, let's give our platform a try. And if you like us, please help us to spread the word and do not forget to bookmark our site. Thank you!</span>
            ]
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="Faq px-10 md:py-5">
                <h1 className="text-white font-bebas site-qsn text-6xl">
                    Frequently Asked Questions ~
                </h1>
                <div className='py-10 '>
                    <div id="accordion-open" data-accordion="open">
                        {FAQ.map((item, index) => (
                            <div key={index}>
                                <h2 id={`accordion-open-heading-${index}`}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-between w-full p-6 md:p-10 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                        onClick={() => toggleItem(index)}
                                    >
                                        <span className="flex text-xl faq-qsn font-bebas items-center">{item.qsn}</span>
                                        <svg data-accordion-icon className={`w-3 h-3 ${openIndex === index ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                        </svg>
                                    </button>
                                </h2>
                                {openIndex === index && (
                                    <div id={`accordion-open-body-${index}`} className="border p-10 border-b-0 border-gray-200 dark:border-gray-700">
                                        {item.answer.map((ans, ansIndex) => (
                                            <p key={ansIndex} className="mb-4 text-lg faq-ans text-[#21E2AD] ">{ans}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
