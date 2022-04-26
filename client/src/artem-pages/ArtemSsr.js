//426x880 images
import atmospherics from '../images/Artem_"Atmospherics".png'
import dreamfulMelodies from '../images/Artem_"Dreamful_Melodies".png'
import entwinedFate from '../images/Artem_"Entwined_Fate".png'
import lovingMemories from '../images/Artem_"Loving_Memories".png'
import porUnaCabeza from '../images/Artem_"Por_Una_Cabeza".png'
import wanderingHeart from '../images/Artem_"Wandering_Heart".png'

//1920x1080 videos
import atmosphericsVid1 from '../images/Artem_"Atmospherics"_Base.mp4'
import atmosphericsVid2 from '../images/Artem_"Atmospherics"_Evolve_1.mp4'
import atmosphericsVid3 from '../images/Artem_"Atmospherics"_Evolve_2.mp4'
import dreamfulMelodiesVid1 from '../images/Artem_"Dreamful_Melodies"_Base.mp4'
import dreamfulMelodiesVid2 from '../images/Artem_"Dreamful_Melodies"_Evolve_1.mp4'
import dreamfulMelodiesVid3 from '../images/Artem_"Dreamful_Melodies"_Evolve_2.mp4'
import entwinedFateVid1 from '../images/Artem_"Entwined_Fate"_Base.mp4'
import entwinedFateVid2 from '../images/Artem_"Entwined_Fate"_Evolve_1.mp4'
import entwinedFateVid3 from '../images/Artem_"Entwined_Fate"_Evolve_2.mp4'
import lovingMemoriesVid1 from '../images/Artem_"Loving_Memories"_Base.mp4'
import lovingMemoriesVid2 from '../images/Artem_"Loving_Memories"_Evolve_1.mp4'
import lovingMemoriesVid3 from '../images/Artem_"Loving_Memories"_Evolve_2.mp4'
import porUnaCabezaVid1 from '../images/Artem_"Por_Una_Cabeza"_Base.mp4'
import porUnaCabezaVid2 from '../images/Artem_"Por_Una_Cabeza"_Evolve_1.mp4'
import porUnaCabezaVid3 from '../images/Artem_"Por_Una_Cabeza"_Evolve_2.mp4'
import wanderingHeartVid1 from '../images/Artem_"Wandering_Heart"_Base.mp4'
import wanderingHeartVid2 from '../images/Artem_"Wandering_Heart"_Evolve_1.mp4'
import wanderingHeartVid3 from '../images/Artem_"Wandering_Heart"_Evolve_2.mp4'

import { useState } from 'react'
import FullScreenView from '../FullScreenView'

const artemSsrCards = [
    {
        key: 1,
        title: 'Atmospherics',
        basePicture: atmospherics,
        baseVid: atmosphericsVid1,
        evolVid1: atmosphericsVid2,
        evolVid2: atmosphericsVid3,
        videoSrc: 'https://www.youtube.com/embed/sOVDC3C1NVU',
        videoSrc2: 'https://www.youtube.com/embed/KgwTqrSLWxI'
    },
    {
        key: 2,
        title: 'Dreamful Melodies',
        basePicture: dreamfulMelodies,
        baseVid: dreamfulMelodiesVid1,
        evolVid1: dreamfulMelodiesVid2,
        evolVid2: dreamfulMelodiesVid3,
        videoSrc: 'https://www.youtube.com/embed/NyxM4kyz-GA',
        videoSrc2: 'https://www.youtube.com/embed/J7BufRocjuY'
    },
    {
        key: 3,
        title: 'Entwined Fate',
        basePicture: entwinedFate,
        baseVid: entwinedFateVid1,
        evolVid1: entwinedFateVid2,
        evolVid2: entwinedFateVid3,
        videoSrc: 'https://www.youtube.com/embed/S9KorOnhyEU',
        videoSrc2: 'https://www.youtube.com/embed/B10rC9Yk9UI'
    },
    {
        key: 4,
        title: 'Loving Memories',
        basePicture: lovingMemories,
        baseVid: lovingMemoriesVid1,
        evolVid1: lovingMemoriesVid2,
        evolVid2: lovingMemoriesVid3,
        videoSrc: 'https://www.youtube.com/embed/1CgC50UuysA',
        videoSrc2: 'https://www.youtube.com/embed/DD4yek6ugEA'
    },
    {
        key: 5,
        title: 'Por Una Cabeza',
        basePicture: porUnaCabeza,
        baseVid: porUnaCabezaVid1,
        evolVid1: porUnaCabezaVid2,
        evolVid2: porUnaCabezaVid3,
        videoSrc: 'https://www.youtube.com/embed/rPw9MZeUUpU',
        videoSrc2: 'https://www.youtube.com/embed/YxH3fliQnwY'
    },
    {
        key: 6,
        title: 'Wandering Heart',
        basePicture: wanderingHeart,
        baseVid: wanderingHeartVid1,
        evolVid1: wanderingHeartVid2,
        evolVid2: wanderingHeartVid3,
        videoSrc: 'https://www.youtube.com/embed/21IhvCvjEM8',
        videoSrc2: 'https://www.youtube.com/embed/21IhvCvjEM8?start=3539'
    }
]

function ArtemSsr({ setVideoSrc, setHeader }) {
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
                    className={`artem-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="ssr-cards">
                {artemSsrCards.map((card) => {
                    return (
                        <div className='card' key={card.key}>
                            <h3 className="artem-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.basePicture}`} alt={`${card.title}`} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}></img>
                            <div className="artem-call-line" onClick={() => selectCardCall(card)}>
                                <h4>Call</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArtemSsr;