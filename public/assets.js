import background from './assets/home-page-background.png'
import slide1 from './assets/slide1.jpeg'
import slide2 from './assets/slide2.png'
import slide3 from './assets/slide3.jpg'
import slide4 from './assets/slide4.jpg'
import slide5 from './assets/slide5.jpg'
import slide6 from './assets/slide6.jpg'
import slide7 from './assets/slide7.jpg'
import slide8 from './assets/slide8.jpg'

import Anime1 from './assets/onePiece.webp'
import Anime2 from './assets/Wistoria.jpg'
import Anime3 from './assets/oshi.png'
import Anime4 from './assets/DemonSlayer.jpg'
import Anime5 from './assets/myHero.jpg'
import Anime6 from './assets/Kaiju.jpg'
import Anime7 from './assets/TowerOFGod.png'
import Anime8 from './assets/ReMonster.jpg'
import Anime9 from './assets/WindBreaker.jpg'
import Anime10 from './assets/SoloLeveling.png'

const animeDetails_ = {
     name : "",
     summery : "",
     type : " ",
     language : ["Hindi","Japense"],
     img : Anime1,
     backImg : "",
     mostWatched : '',
     trending : true,
     noOfEpisodes : '',
     lengthOfEpisode: '',
     new : true,
     releaseDate : '',
     author : '',
     mainCharacters : '',
     episodes : [
        {
            nameOfEpisode : '',
            episodeNo : '',
        },
        {
            nameOfEpisode : '',
            episodeNo : '',
        },
     ],
     mangaName : '',
     Country : '',
     status : "streaming",
     protagonist : [
        {
            nameOfProtagonist : "Ichigo",
            photo : '',
        },
     ],
     antagonist : [
        {
            nameOfAntagonist : "Aizen",
            photo : '',
        },
     ],
     subTitle : ["Hindi","English","Japanese"] ,
     animationStudio : '',
     voiceArtists : [
        {
            nameOfVoiceArtist : "",
            photo : '',
            age : ''
        }
     ],
     jonra : '',
     seasons : '',
     review : '',
     ratings : '',
     movies : [
        {
            nameOfMovie : '',
            movieNum : '',
            lengthOfMovie : ''
        }
     ],
     tags : ['#Mystry','#Action'],

} 

// import Anime from './assets/'
// import Anime from './assets/'


export const assets = {
    background ,slide1,slide2,slide3,slide4,
    slide5,slide6,slide7,slide8,Anime1,Anime2,Anime3,Anime4,Anime5,Anime6,Anime7,Anime8,Anime9,Anime10,
    animeDetails_
}