//426x900 images
// or temp 388x819 images
import stretching from '../images/Artem_"Stretching".png'

//1080x1920 videos


import { useEffect, useState } from 'react';
import FullScreenView from '../FullScreenView'

const artemMrCards = [
    {
        key: 1,
        title: 'Stretching',
        basePicture: stretching,
        baseVid: '',
        evolVid1: '',
        videoSrc: 'https://www.youtube.com/embed/U3Q0ZP_MVUk'
    }
]

function ArtemMr({ setVideoSrc, setHeader }) {
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
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="mr-cards">
                {artemMrCards.map((card) => {
                    return (<div className='card' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                        <h3 className="artem-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default ArtemMr;