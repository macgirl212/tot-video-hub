//426x880 images
import allThroughTheNight from '../images/Marius__All_Through_the_Night.png'
import daytimeAurora from '../images/Marius_"Daytime_Aurora".png'
import eyeOfTheBeholder from '../images/Marius__Eye_of_the_Beholder.png'
import fabulousFeast from '../images/Marius__Fabulous_Feast.png'
import inTheDarkness from '../images/Marius__In_the_Darkness.png'
import matchingTattoos from '../images/Marius__Matching_Tattoos.png'
import narrowRoad from '../images/Marius__Narrow_Road.png'
import willOfTheTrees from '../images/Marius_"Will_of_the_Trees".png'

//1920x1080 videos
import allThroughTheNightVid1 from '../images/Marius_"All_Through_the_Night"_Base.mp4'
import allThroughTheNightVid2 from '../images/Marius_"All_Through_the_Night"_Evolve_1.mp4'
import allThroughTheNightVid3 from '../images/Marius_"All_Through_the_Night"_Evolve_2.mp4'
import daytimeAuroraVid1 from '../images/Marius_"Daytime_Aurora"_Base.mp4'
import daytimeAuroraVid2 from '../images/Marius_"Daytime_Aurora"_Evolve_1.mp4'
import daytimeAuroraVid3 from '../images/Marius_"Daytime_Aurora"_Evolve_2.mp4'
import eyeOfTheBeholderVid1 from '../images/Marius_"Eye_of_the_Beholder"_Base.mp4'
import eyeOfTheBeholderVid2 from '../images/Marius_"Eye_of_the_Beholder"_Evolve_1.mp4'
import eyeOfTheBeholderVid3 from '../images/Marius_"Eye_of_the_Beholder"_Evolve_2.mp4'
import fabulousFeastVid1 from '../images/Marius_"Fabulous_Feast"_Base.mp4'
import fabulousFeastVid2 from '../images/Marius_"Fabulous_Feast"_Evolve_1.mp4'
import fabulousFeastVid3 from '../images/Marius_"Fabulous_Feast"_Evolve_2.mp4'
import inTheDarknessVid1 from '../images/Marius_"In_the_Darkness"_Base.mp4'
import inTheDarknessVid2 from '../images/Marius_"In_the_Darkness"_Evolve_1.mp4'
import inTheDarknessVid3 from '../images/Marius_"In_the_Darkness"_Evolve_2.mp4'
import matchingTattoosVid1 from '../images/Marius_"Matching_Tattoos"_Base.mp4'
import matchingTattoosVid2 from '../images/Marius_"Matching_Tattoos"_Evolve_1.mp4'
import matchingTattoosVid3 from '../images/Marius_"Matching_Tattoos"_Evolve_2.mp4'
import narrowRoadVid1 from '../images/Marius_"Narrow_Road"_Base.mp4'
import narrowRoadVid2 from '../images/Marius_"Narrow_Road"_Evolve_1.mp4'
import narrowRoadVid3 from '../images/Marius_"Narrow_Road"_Evolve_2.mp4'
import willOfTheTreesVid1 from '../images/Marius_"Will_of_the_Trees"_Base.mp4'
import willOfTheTreesVid2 from '../images/Marius_"Will_of_the_Trees"_Evolve_1.mp4'
import willOfTheTreesVid3 from '../images/Marius_"Will_of_the_Trees"_Evolve_2.mp4'

import { useEffect, useState } from 'react'
import FullScreenView from '../FullScreenView'

const mariusSsrCards = [
    {
        key: 1,
        title: 'All Through the Night',
        basePicture: allThroughTheNight,
        baseVid: allThroughTheNightVid1,
        evolVid1: allThroughTheNightVid2,
        evolVid2: allThroughTheNightVid3,
        videoSrc: 'https://www.youtube.com/embed/N122a-B8Cpw',
        videoSrc2: 'https://www.youtube.com/embed/Jp90u-xS8M4'
    },
    {
        key: 2,
        title: 'Daytime Aurora',
        basePicture: daytimeAurora,
        baseVid: daytimeAuroraVid1,
        evolVid1: daytimeAuroraVid2,
        evolVid2: daytimeAuroraVid3,
        videoSrc: 'https://www.youtube.com/embed/mnE14Tbw0DE',
        videoSrc2: 'https://www.youtube.com/embed/8Mga7TmffiY?start=4263'
    },
    {
        key: 3,
        title: 'Eye of the Beholder',
        basePicture: eyeOfTheBeholder,
        baseVid: eyeOfTheBeholderVid1,
        evolVid1: eyeOfTheBeholderVid2,
        evolVid2: eyeOfTheBeholderVid3,
        videoSrc: 'https://www.youtube.com/embed/pOFiAOsLwsc',
        videoSrc2: 'https://www.youtube.com/embed/9UHrlnKPrSQ'
    },
    {
        key: 4,
        title: 'Fabulous Feast',
        basePicture: fabulousFeast,
        baseVid: fabulousFeastVid1,
        evolVid1: fabulousFeastVid2,
        evolVid2: fabulousFeastVid3,
        videoSrc: 'https://www.youtube.com/embed/VYQubKXkciw',
        videoSrc2: 'https://www.youtube.com/embed/yJDQM4Dhu8A'
    },
    {
        key: 5,
        title: 'In the Darkness',
        basePicture: inTheDarkness,
        baseVid: inTheDarknessVid1,
        evolVid1: inTheDarknessVid2,
        evolVid2: inTheDarknessVid3,
        videoSrc: 'https://www.youtube.com/embed/3_19__u0y8A',
        videoSrc2: 'https://www.youtube.com/embed/1BWKsbGg1Ak'
    },
    {
        key: 6,
        title: 'Matching Tattoos',
        basePicture: matchingTattoos,
        baseVid: matchingTattoosVid1,
        evolVid1: matchingTattoosVid2,
        evolVid2: matchingTattoosVid3,
        videoSrc: 'https://www.youtube.com/embed/uWSvx0XvNdA',
        videoSrc2: 'https://www.youtube.com/embed/ldjcT60lF1I'
    },
    {
        key: 7,
        title: 'Narrow Road',
        basePicture: narrowRoad,
        baseVid: narrowRoadVid1,
        evolVid1: narrowRoadVid2,
        evolVid2: narrowRoadVid3,
        videoSrc: 'https://www.youtube.com/embed/suzwUUvtbD4',
        videoSrc2: 'https://www.youtube.com/embed/XqEVEkl40qo'
    },
    {
        key: 8,
        title: 'Will of the Trees',
        basePicture: willOfTheTrees,
        baseVid: willOfTheTreesVid1,
        evolVid1: willOfTheTreesVid2,
        evolVid2: willOfTheTreesVid3,
        videoSrc: 'https://www.youtube.com/embed/gNrSIIOT1TE',
        videoSrc2: 'https://www.youtube.com/embed/M0eNsNFnkqE?start=3965'
    }
]

function MariusSsr({ setVideoSrc, setHeader }) {
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

    useEffect(() => {}, [fullScreen])

    return (
        <div>
            { showFullScreen ? 
                <FullScreenView
                    className={`marius-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="ssr-cards">
                {mariusSsrCards.map((card) => {
                    return (
                        <div className='card' key={card.key}>
                            <h3 className="marius-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.basePicture}`} alt='' onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}></img>
                            <div className="marius-call-line" onClick={() => selectCardCall(card)}>
                                <h4>Call</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MariusSsr;