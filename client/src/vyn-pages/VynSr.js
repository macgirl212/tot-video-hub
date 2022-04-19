//426x900 images
import coolSummer from '../images/Vyn__Cool_Summer.png'
import entrapped from '../images/Vyn__Entrapped.png'
import falseTears from '../images/Vyn_"False_Tears".png'
import gentlemansGame from '../images/Vyn_"Gentlemans_Game".png'
import lingeringWarmth from '../images/Vyn_"Lingering_Warmth".png'
import mendedHeart from '../images/Vyn_"Mended_Heart".png'
import mercuryInRetrograde from '../images/Vyn_"Mercury_in_Retrograde".png'
import snowyFairyTale from '../images/Vyn_"Snowy_Fairy_Tale".png'
import spillingLight from '../images/Vyn_"Spilling_Light".png'

//1080x1920 videos
import coolSummerVid1 from '../images/Vyn_"Cool_Summer"_Base.mp4'
import coolSummerVid2 from '../images/Vyn_"Cool_Summer"_Evolve_1.mp4'
import coolSummerVid3 from '../images/Vyn_"Cool_Summer"_Evolve_2.mp4'
import entrappedVid1 from '../images/Vyn_"Entrapped"_Base.mp4'
import entrappedVid2 from '../images/Vyn_"Entrapped"_Evolve_1.mp4'
import entrappedVid3 from '../images/Vyn_"Entrapped"_Evolve_2.mp4'
import falseTearsVid1 from '../images/Vyn_"False_Tears"_Base.mp4'
import falseTearsVid2 from '../images/Vyn_"False_Tears"_Evolve_1.mp4'
import falseTearsVid3 from '../images/Vyn_"False_Tears"_Evolve_2.mp4'
import gentlemansGameVid1 from '../images/Vyn_"Gentlemans_Game"_Base.mp4'
import gentlemansGameVid2 from '../images/Vyn_"Gentlemans_Game"_Evolve_1.mp4'
import gentlemansGameVid3 from '../images/Vyn_"Gentlemans_Game"_Evolve_2.mp4'
import lingeringWarmthVid1 from '../images/Vyn_"Lingering_Warmth"_Base.mp4'
import lingeringWarmthVid2 from '../images/Vyn_"Lingering_Warmth"_Evolve_1.mp4'
import lingeringWarmthVid3 from '../images/Vyn_"Lingering_Warmth"_Evolve_2.mp4'
import mendedHeartVid1 from '../images/Vyn_"Mended_Heart"_Base.mp4'
import mendedHeartVid2 from '../images/Vyn_"Mended_Heart"_Evolve_1.mp4'
import mendedHeartVid3 from '../images/Vyn_"Mended_Heart"_Evolve_2.mp4'
import mercuryInRetrogradeVid1 from '../images/Vyn_"Mercury_in_Retrograde"_Base.mp4'
import mercuryInRetrogradeVid2 from '../images/Vyn_"Mercury_in_Retrograde"_Evolve_1.mp4'
import mercuryInRetrogradeVid3 from '../images/Vyn_"Mercury_in_Retrograde"_Evolve_2.mp4'
import snowyFairyTaleVid1 from '../images/Vyn_"Snowy_Fairy_Tale"_Base.mp4'
import snowyFairyTaleVid2 from '../images/Vyn_"Snowy_Fairy_Tale"_Evolve_1.mp4'
import snowyFairyTaleVid3 from '../images/Vyn_"Snowy_Fairy_Tale"_Evolve_2.mp4'
import spillingLightVid1 from '../images/Vyn_"Spilling_Light"_Base.mp4'
import spillingLightVid2 from '../images/Vyn_"Spilling_Light"_Evolve_1.mp4'
import spillingLightVid3 from '../images/Vyn_"Spilling_Light"_Evolve_2.mp4'

import { useEffect, useState } from 'react';
import FullScreenView from '../FullScreenView'

const vynSrCards = [
    {
        key: 1,
        title: 'Cool Summer',
        basePicture: coolSummer,
        baseVid: coolSummerVid1,
        evolVid1: coolSummerVid2,
        evolVid2: coolSummerVid3,
        videoSrc: 'https://www.youtube.com/embed/aqVp_6hAcrM'
    },
    {
        key: 2,
        title: 'Entrapped',
        basePicture: entrapped,
        baseVid: entrappedVid1,
        evolVid1: entrappedVid2,
        evolVid2: entrappedVid3,
        videoSrc: 'https://www.youtube.com/embed/eO80GC0DtaU'
    },
    {
        key: 3,
        title: 'False Tears',
        basePicture: falseTears,
        baseVid: falseTearsVid1,
        evolVid1: falseTearsVid2,
        evolVid2: falseTearsVid3,
        videoSrc: 'https://www.youtube.com/embed/4jnZZ11SMKA'
    },
    {
        key: 4,
        title: 'Gentleman\'s Game',
        basePicture: gentlemansGame,
        baseVid: gentlemansGameVid1,
        evolVid1: gentlemansGameVid2,
        evolVid2: gentlemansGameVid3,
        videoSrc: 'https://www.youtube.com/embed/_EeUz_P8h0M'
    },
    {
        key: 5,
        title: 'Lingering Warmth',
        basePicture: lingeringWarmth,
        baseVid: lingeringWarmthVid1,
        evolVid1: lingeringWarmthVid2,
        evolVid2: lingeringWarmthVid3,
        videoSrc: 'https://www.youtube.com/embed/WNIxTQYvfg0'
    },
    {
        key: 6,
        title: 'Mended Warmth',
        basePicture: mendedHeart,
        baseVid: mendedHeartVid1,
        evolVid1: mendedHeartVid2,
        evolVid2: mendedHeartVid3,
        videoSrc: 'https://www.youtube.com/embed/txIbB_WxuV8'
    },
    {
        key: 7,
        title: 'Mercury in Retrograde',
        basePicture: mercuryInRetrograde,
        baseVid: mercuryInRetrogradeVid1,
        evolVid1: mercuryInRetrogradeVid2,
        evolVid2: mercuryInRetrogradeVid3,
        videoSrc: 'https://www.youtube.com/embed/WZau8k6eVEc'
    },
    {
        key: 8,
        title: 'Snowy Fairy Tale',
        basePicture: snowyFairyTale,
        baseVid: snowyFairyTaleVid1,
        evolVid1: snowyFairyTaleVid2,
        evolVid2: snowyFairyTaleVid3,
        videoSrc: 'https://www.youtube.com/embed/ZaOqO9c9XdM'
    },
    {
        key: 9,
        title: 'Spilling Light',
        basePicture: spillingLight,
        baseVid: spillingLightVid1,
        evolVid1: spillingLightVid2,
        evolVid2: spillingLightVid3,
        videoSrc: 'https://www.youtube.com/embed/giJIeR_bsXw'
    }
]

function VynSr({ setVideoSrc, setHeader }) {
    let [showFullScreen, setShowFullScreen] = useState(false)
    let [fullCard, setFullCard] = useState()

    const fullScreen = (card) => {
        setShowFullScreen(showFullScreen = !showFullScreen)
        setFullCard(card)
    }

    const selectCard = (card) => {
        setVideoSrc(card.videoSrc)
        setHeader(card.title)
    }

    useEffect(() => {}, [fullScreen])

    return (
        <div>
            { showFullScreen ? 
                <FullScreenView
                    className={`vyn-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="sr-cards">
                {vynSrCards.map((card) => {
                    return (<div className='card' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                        <h3 className="vyn-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default VynSr;