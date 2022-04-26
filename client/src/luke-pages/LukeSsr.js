//426x880 images
import alluringGaze from '../images/Luke_"Alluring_Gaze".png'
import iridescentHeartbeat from '../images/Luke_"Iridescent_Heartbeat".png'
import peacefulPlace from '../images/Luke_"Peaceful_Place".png'
import perfectPartner from '../images/Luke_"Perfect_Partner".png'
import shapeOfYou from '../images/Luke_"Shape_of_You".png'
import twinklingEyes from '../images/Luke_"Twinkling_Eyes".png'
import warmEmbrace from '../images/Luke_"Warm_Embrace".png'

//1920x1080 videos
import alluringGazeVid1 from '../images/Luke_"Alluring_Gaze"_Base.mp4'
import alluringGazeVid2 from '../images/Luke_"Alluring_Gaze"_Evolve_1.mp4'
import alluringGazeVid3 from '../images/Luke_"Alluring_Gaze"_Evolve_2.mp4'
import iridescentHeartbeatVid1 from '../images/Luke_"Iridescent_Heartbeat"_Base.mp4'
import iridescentHeartbeatVid2 from '../images/Luke_"Iridescent_Heartbeat"_Evolve_1.mp4'
import iridescentHeartbeatVid3 from '../images/Luke_"Iridescent_Heartbeat"_Evolve_2.mp4'
import peacefulPlaceVid1 from '../images/Luke_"Peaceful_Place"_Base.mp4'
import peacefulPlaceVid2 from '../images/Luke_"Peaceful_Place"_Evolve_1.mp4'
import peacefulPlaceVid3 from '../images/Luke_"Peaceful_Place"_Evolve_2.mp4'
import perfectPartnerVid1 from '../images/Luke_"Perfect_Partner"_Base.mp4'
import perfectPartnerVid2 from '../images/Luke_"Perfect_Partner"_Evolve_1.mp4'
import perfectPartnerVid3 from '../images/Luke_"Perfect_Partner"_Evolve_2.mp4'
import shapeOfYouVid1 from '../images/Luke_"Shape_of_You"_Base.mp4'
import shapeOfYouVid2 from '../images/Luke_"Shape_of_You"_Evolve_1.mp4'
import shapeOfYouVid3 from '../images/Luke_"Shape_of_You"_Evolve_2.mp4'
import twinklingEyesVid1 from '../images/Luke_"Twinkling_Eyes"_Base.mp4'
import twinklingEyesVid2 from '../images/Luke_"Twinkling_Eyes"_Evolve_1.mp4'
import twinklingEyesVid3 from '../images/Luke_"Twinkling_Eyes"_Evolve_2.mp4'
import warmEmbraceVid1 from '../images/Luke_"Warm_Embrace"_Base.mp4'
import warmEmbraceVid2 from '../images/Luke_"Warm_Embrace"_Evolve_1.mp4'
import warmEmbraceVid3 from '../images/Luke_"Warm_Embrace"_Evolve_2.mp4'

import { useState } from 'react'
import FullScreenView from '../FullScreenView'

const lukeSsrCards = [
    {
        key: 1,
        title: 'Alluring Gaze',
        basePicture: alluringGaze,
        baseVid: alluringGazeVid1,
        evolVid1: alluringGazeVid2,
        evolVid2: alluringGazeVid3,
        videoSrc: 'https://www.youtube.com/embed/_RDDHPJUy9A',
        videoSrc2: 'https://www.youtube.com/embed/VL8yCD0uzbE'
    },
    {
        key: 2,
        title: 'Iridescent Heartbeat',
        basePicture: iridescentHeartbeat,
        baseVid: iridescentHeartbeatVid1,
        evolVid1: iridescentHeartbeatVid2,
        evolVid2: iridescentHeartbeatVid3,
        videoSrc: 'https://www.youtube.com/embed/zIYbGixNX7c',
        videoSrc2: 'https://www.youtube.com/embed/3Crc2cVI7gQ'
    },
    {
        key: 3,
        title: 'Peaceful Place',
        basePicture: peacefulPlace,
        baseVid: peacefulPlaceVid1,
        evolVid1: peacefulPlaceVid2,
        evolVid2: peacefulPlaceVid3,
        videoSrc: 'https://www.youtube.com/embed/suog0ROh_T8',
        videoSrc2: 'https://www.youtube.com/embed/h_CD06rs62U'
    },
    {
        key: 4,
        title: 'Perfect Partner',
        basePicture: perfectPartner,
        baseVid: perfectPartnerVid1,
        evolVid1: perfectPartnerVid2,
        evolVid2: perfectPartnerVid3,
        videoSrc: 'https://www.youtube.com/embed/g3jL1Euyuco',
        videoSrc2: 'https://www.youtube.com/embed/W0q5DbyJ62E'
    },
    {
        key: 5,
        title: 'Shape of You',
        basePicture: shapeOfYou,
        baseVid: shapeOfYouVid1,
        evolVid1: shapeOfYouVid2,
        evolVid2: shapeOfYouVid3,
        videoSrc: 'https://www.youtube.com/embed/wioCdH-QOv0',
        videoSrc2: 'https://www.youtube.com/embed/j1vs-sWzYnw'
    },
    {
        key: 6,
        title: 'Twinking Eyes',
        basePicture: twinklingEyes,
        baseVid: twinklingEyesVid1,
        evolVid1: twinklingEyesVid2,
        evolVid2: twinklingEyesVid3,
        videoSrc: 'https://www.youtube.com/embed/8w6kXYHJP2s',
        videoSrc2: 'https://www.youtube.com/embed/LBK063iF1kA'
    },
    {
        key: 7,
        title: 'Warm Embrace',
        basePicture: warmEmbrace,
        baseVid: warmEmbraceVid1,
        evolVid1: warmEmbraceVid2,
        evolVid2: warmEmbraceVid3,
        videoSrc: 'https://www.youtube.com/embed/EHlcmvUePOg',
        videoSrc2: 'https://www.youtube.com/embed/RMR4nNEN_rI'
    }
]

function LukeSsr({ setVideoSrc, setHeader }) {
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
                    className={`luke-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="ssr-cards">
                {lukeSsrCards.map((card) => {
                    return (
                        <div className='card' key={card.key}>
                            <h3 className="luke-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.basePicture}`} alt='' onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}></img>
                            <div className="luke-call-line" onClick={() => selectCardCall(card)}>
                                <h4>Call</h4>
                            </div>
                        </div>
                    )
                })}
        </div>
        </div>
    )
}

export default LukeSsr;