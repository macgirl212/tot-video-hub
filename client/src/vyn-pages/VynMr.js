//426x900 images
import morningGlory from '../images/Vyn_"Morning_Glory".png'

//1080x1920 videos
import morningGloryVid1 from '../images/Vyn_"Morning_Glory"_Base.mp4'
import morningGloryVid2 from '../images/Vyn_"Morning_Glory"_Evolve_1.mp4'

import { useEffect, useState } from 'react';
import FullScreenView from '../FullScreenView'

const vynMrCards = [
    {
        key: 1,
        title: 'Morning Glory',
        basePicture: morningGlory,
        baseVid: morningGloryVid1,
        evolVid1: morningGloryVid2,
        videoSrc: 'https://www.youtube.com/embed/h9Zwt_YHNQY'
    }
]

function VynMr({ setVideoSrc, setHeader }) {
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
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="mr-cards">
                {vynMrCards.map((card) => {
                    return (<div className='card' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                        <h3 className="vyn-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default VynMr;