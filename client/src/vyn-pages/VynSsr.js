//426x880 images
import aStarInTheNight from '../images/Vyn_"A_Star_in_the_Night".png'
import betweenGoodAndEvil from '../images/Vyn_"Between_Good_and_Evil".png'
import blazingColors from '../images/Vyn_"Blazing_Colors".png'
import heartfeltSuspense from '../images/Vyn_"Heartfelt_Suspense".png'
import medievalSuspense from '../images/Vyn_"Medieval_Suspense".png'
import nearAndFar from '../images/Vyn_"Near_and_Far".png'

//1920x1080 videos
import aStarInTheNightVid1 from '../images/Vyn_"A_Star_in_the_Night"_Base.mp4'
import aStarInTheNightVid2 from '../images/Vyn_"A_Star_in_the_Night"_Evolve_1.mp4'
import aStarInTheNightVid3 from '../images/Vyn_"A_Star_in_the_Night"_Evolve_2.mp4'
import betweenGoodAndEvilVid1 from '../images/Vyn_"Between_Good_and_Evil"_Base.mp4'
import betweenGoodAndEvilVid2 from '../images/Vyn_"Between_Good_and_Evil"_Evolve_1.mp4'
import betweenGoodAndEvilVid3 from '../images/Vyn_"Between_Good_and_Evil"_Evolve_2.mp4'
import blazingColorsVid1 from '../images/Vyn_"Blazing_Colors"_Base.mp4'
import blazingColorsVid2 from '../images/Vyn_"Blazing_Colors"_Evolve_1.mp4'
import blazingColorsVid3 from '../images/Vyn_"Blazing_Colors"_Evolve_2.mp4'
import heartfeltSuspenseVid1 from '../images/Vyn_"Heartfelt_Suspense"_Base.mp4'
import heartfeltSuspenseVid2 from '../images/Vyn_"Heartfelt_Suspense"_Evolve_1.mp4'
import heartfeltSuspenseVid3 from '../images/Vyn_"Heartfelt_Suspense"_Evolve_2.mp4'
import medievalSuspenseVid1 from '../images/Vyn_"Medieval_Suspense"_Base.mp4'
import medievalSuspenseVid2 from '../images/Vyn_"Medieval_Suspense"_Evolve_1.mp4'
import medievalSuspenseVid3 from '../images/Vyn_"Medieval_Suspense"_Evolve_2.mp4'
import nearAndFarVid1 from '../images/Vyn_"Near_and_Far"_Base.mp4'
import nearAndFarVid2 from '../images/Vyn_"Near_and_Far"_Evolve_1.mp4'
import nearAndFarVid3 from '../images/Vyn_"Near_and_Far"_Evolve_2.mp4'

import { useState } from 'react'
import FullScreenView from '../FullScreenView'

const vynSsrCards = [
    {
        key: 1,
        title: 'A Star in the Night',
        basePicture: aStarInTheNight,
        baseVid: aStarInTheNightVid1,
        evolVid1: aStarInTheNightVid2,
        evolVid2: aStarInTheNightVid3,
        videoSrc: 'https://www.youtube.com/embed/ZyKNhJ2o35A',
        videoSrc2: 'https://www.youtube.com/embed/ZWDTeo1il1I'
    },
    {
        key: 2,
        title: 'Between Good and Evil',
        basePicture: betweenGoodAndEvil,
        baseVid: betweenGoodAndEvilVid1,
        evolVid1: betweenGoodAndEvilVid2,
        evolVid2: betweenGoodAndEvilVid3,
        videoSrc: 'https://www.youtube.com/embed/9rR4CHETuus',
        videoSrc2: 'https://www.youtube.com/embed/AhclM2X2Efo'
    },
    {
        key: 3,
        title: 'Blazing Colors',
        basePicture: blazingColors,
        baseVid: blazingColorsVid1,
        evolVid1: blazingColorsVid2,
        evolVid2: blazingColorsVid3,
        videoSrc: 'https://www.youtube.com/embed/aKkkMa58Cew',
        videoSrc2: 'https://www.youtube.com/embed/iRIzHquDuVE'
    },
    {
        key: 4,
        title: 'Heartfelt Suspense',
        basePicture: heartfeltSuspense,
        baseVid: heartfeltSuspenseVid1,
        evolVid1: heartfeltSuspenseVid2,
        evolVid2: heartfeltSuspenseVid3,
        videoSrc: 'https://www.youtube.com/embed/dPc6AeniT90',
        videoSrc2: 'https://www.youtube.com/embed/IKZlHZ4vR6U'
    },
    {
        key: 5,
        title: 'Medieval Suspense',
        basePicture: medievalSuspense,
        baseVid: medievalSuspenseVid1,
        evolVid1: medievalSuspenseVid2,
        evolVid2: medievalSuspenseVid3,
        videoSrc: 'https://www.youtube.com/embed/LpDppgk52qM',
        videoSrc2: 'https://www.youtube.com/embed/MuYfhi9AEdA'
    },
    {
        key: 6,
        title: 'Near and Far',
        basePicture: nearAndFar,
        baseVid: nearAndFarVid1,
        evolVid1: nearAndFarVid2,
        evolVid2: nearAndFarVid3,
        videoSrc: 'https://www.youtube.com/embed/NSS7eAUVAi4',
        videoSrc2: 'https://www.youtube.com/embed/AyD-MyxR274'
    }
]

function VynSsr({ setVideoSrc, setHeader }) {
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

    const selectCardCall = (card) => {
        setVideoSrc(card.videoSrc2)
        setHeader(card.title)
    }

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
            <div className="ssr-cards">
                {vynSsrCards.map((card) => {
                    return (
                        <div className='card' key={card.key}>
                            <h3 className="vyn-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.basePicture}`} alt='' onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}></img>
                            <div className="vyn-call-line" onClick={() => selectCardCall(card)}>
                                <h4>Call</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VynSsr;