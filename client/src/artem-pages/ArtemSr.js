//426x900 images
import autumnDreams from '../images/Artem_"Autumn_Dreams".png'
import darkestBeforeDawn from '../images/Artem_"Darkest_before_Dawn".png'
import fixatedOnYou from '../images/Artem_"Fixated_on_You".png'
import focusFire from '../images/Artem_"Focus_Fire".png'
import inSicknessAndInHealth from '../images/Artem_"In_Sickness_or_in_Health".png'
import sparks from '../images/Artem_"Sparks".png'
import stayingHumble from '../images/Artem_"Staying_Humble".png'
import thinVeil from '../images/Artem_"Thin_Veil".png'

//1080x1920 videos
import autumnDreamsVid1 from '../images/Artem_"Autumn_Dreams"_Base.mp4'
import autumnDreamsVid2 from '../images/Artem_"Autumn_Dreams"_Evolve_1.mp4'
import autumnDreamsVid3 from '../images/Artem_"Autumn_Dreams"_Evolve_2.mp4'
import darkestBeforeDawnVid1 from '../images/Artem_"Darkest_before_Dawn"_Base.mp4'
import darkestBeforeDawnVid2 from '../images/Artem_"Darkest_before_Dawn"_Evolve_1.mp4'
import darkestBeforeDawnVid3 from '../images/Artem_"Darkest_before_Dawn"_Evolve_2.mp4'
import fixatedOnYouVid1 from '../images/Artem_"Fixated_on_You"_Base.mp4'
import fixatedOnYouVid2 from '../images/Artem_"Fixated_on_You"_Evolve_1.mp4'
import fixatedOnYouVid3 from '../images/Artem_"Fixated_on_You"_Evolve_2.mov'
import focusFireVid1 from '../images/Artem_"Focus_Fire"_Base.mp4'
import focusFireVid2 from '../images/Artem_"Focus_Fire"_Evolve_1.mp4'
import focusFireVid3 from '../images/Artem_"Focus_Fire"_Evolve_2.mp4'
import inSicknessAndInHealthVid1 from '../images/Artem_"In_Sickness_or_in_Health"_Base.mp4'
import inSicknessAndInHealthVid2 from '../images/Artem_"In_Sickness_or_in_Health"_Evolve_1.mp4'
import inSicknessAndInHealthVid3 from '../images/Artem_"In_Sickness_or_in_Health"_Evolve_2.mp4'
import sparksVid1 from '../images/Artem_"Sparks"_Base.mp4'
import sparksVid2 from '../images/Artem_"Sparks"_Evolve_1.mp4'
import sparksVid3 from '../images/Artem_"Sparks"_Evolve_2.mp4'
import stayingHumbleVid1 from '../images/Artem_"Staying_Humble"_Base.mp4'
import stayingHumbleVid2 from '../images/Artem_"Staying_Humble"_Evolve_1.mp4'
import stayingHumbleVid3 from '../images/Artem_"Staying_Humble"_Evolve_2.mp4'
import thinVeilVid1 from '../images/Artem_"Thin_Veil"_Base.mp4'
import thinVeilVid2 from '../images/Artem_"Thin_Veil"_Evolve_1.mp4'
import thinVeilVid3 from '../images/Artem_"Thin_Veil"_Evolve_2.mp4'

import { useEffect, useState } from 'react';
import FullScreenView from '../FullScreenView'

const artemSrCards = [
    {
        key: 1,
        title: 'Autumn Dreams',
        alt: 'Autumn Dreams',
        basePicture: autumnDreams,
        baseVid: autumnDreamsVid1,
        evolVid1: autumnDreamsVid2,
        evolVid2: autumnDreamsVid3,
        videoSrc: 'https://www.youtube.com/embed/ux7bTLZ2wJ4'
    },
    {
        key: 2,
        title: 'Darkest Before Dawn',
        alt: 'Darkest Before Dawn',
        basePicture: darkestBeforeDawn,
        baseVid: darkestBeforeDawnVid1,
        evolVid1: darkestBeforeDawnVid2,
        evolVid2: darkestBeforeDawnVid3,
        videoSrc: 'https://www.youtube.com/embed/P7NTXXTJ444'
    },
    {
        key: 3,
        title: 'Fixated on You',
        alt: 'Fixated on You',
        basePicture: fixatedOnYou,
        baseVid: fixatedOnYouVid1,
        evolVid1: fixatedOnYouVid2,
        evolVid2: fixatedOnYouVid3,
        videoSrc: 'https://www.youtube.com/embed/PNSSyFut4cc'
    },
    {
        key: 4,
        title: 'Focus Fire',
        alt: 'Focus Fire',
        basePicture: focusFire,
        baseVid: focusFireVid1,
        evolVid1: focusFireVid2,
        evolVid2: focusFireVid3,
        videoSrc: 'https://www.youtube.com/embed/QFgfINKywE0'
    },
    {
        key: 5,
        title: 'In Sickness and in Health',
        alt: 'In Sickness and in Health',
        basePicture: inSicknessAndInHealth,
        baseVid: inSicknessAndInHealthVid1,
        evolVid1: inSicknessAndInHealthVid2,
        evolVid2: inSicknessAndInHealthVid3,
        videoSrc: 'https://www.youtube.com/embed/Q1R1_I8054s'
    },
    {
        key: 6,
        title: 'Sparks',
        alt: 'Sparks',
        basePicture: sparks,
        baseVid: sparksVid1,
        evolVid1: sparksVid2,
        evolVid2: sparksVid3,
        videoSrc: 'https://www.youtube.com/embed/0VJOeTwTqw8'
    },
    {
        key: 7,
        title: 'Staying Humble',
        alt: 'Staying Humble',
        basePicture: stayingHumble,
        baseVid: stayingHumbleVid1,
        evolVid1: stayingHumbleVid2,
        evolVid2: stayingHumbleVid3,
        videoSrc: 'https://www.youtube.com/embed/L17sZ_GkHXA'
    },
    {
        key: 8,
        title: 'Thin Veil',
        alt: 'Thin Veil',
        basePicture: thinVeil,
        baseVid: thinVeilVid1,
        evolVid1: thinVeilVid2,
        evolVid2: thinVeilVid3,
        videoSrc: 'https://www.youtube.com/embed/zrPJBiEgF44'
    }
]

function ArtemSr({ setVideoSrc, setHeader }) {
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
                    className={`artem-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="sr-cards">
                {artemSrCards.map((card) => {
                    return (
                        <div className='card' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                            <h3 className="artem-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.basePicture}`} alt={`${card.alt}`}></img>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArtemSr;