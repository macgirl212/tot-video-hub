//426x900 images
import aDanceOnTheClouds from '../images/Marius__A_Dance_on_the_Clouds.png'
import butterflies from '../images/Marius__Butterflies.png'
import childAtHeart from '../images/Marius__Child_at_Heart.png'
import dreamOfThebes from '../images/Marius__Dream_of_Thebes.png'
import fallingIntoYou from '../images/Marius__Falling_into_You.png'
import overtone from '../images/Marius__Overtone.png'
import twilightBeauty from '../images/Marius__Twilight_Beauty.png'

//1080x1920 videos
import aDanceOnTheCloudsVid1 from '../images/Marius_"A_Dance_on_the_Clouds"_Base.mp4'
import aDanceOnTheCloudsVid2 from '../images/Marius_"A_Dance_on_the_Clouds"_Evolve_1.mp4'
import aDanceOnTheCloudsVid3 from '../images/Marius_"A_Dance_on_the_Clouds"_Evolve_2.mp4'
import butterfliesVid1 from '../images/Marius_"Butterflies"_Base.mp4'
import butterfliesVid2 from '../images/Marius_"Butterflies"_Evolve_1.mp4'
import butterfliesVid3 from '../images/Marius_"Butterflies"_Evolve_2.mp4'
import childAtHeartVid1 from '../images/Marius_"Child_at_Heart"_Base.mp4'
import childAtHeartVid2 from '../images/Marius_"Child_at_Heart"_Evolve_1.mp4'
import childAtHeartVid3 from '../images/Marius_"Child_at_Heart"_Evolve_2.mp4'
import dreamOfThebesVid1 from '../images/Marius_"Dream_of_Thebes"_Base.mp4'
import dreamOfThebesVid2 from '../images/Marius_"Dream_of_Thebes"_Evolve_1.mp4'
import dreamOfThebesVid3 from '../images/Marius_"Dream_of_Thebes"_Evolve_2.mp4'
import fallingIntoYouVid1 from '../images/Marius_"Falling_into_You"_Base.mp4'
import fallingIntoYouVid2 from '../images/Marius_"Falling_into_You"_Evolve_1.mp4'
import fallingIntoYouVid3 from '../images/Marius_"Falling_into_You"_Evolve_2.mp4'
import overtoneVid1 from '../images/Marius_"Overtone"_Base.mp4'
import overtoneVid2 from '../images/Marius_"Overtone"_Evolve_1.mp4'
import overtoneVid3 from '../images/Marius_"Overtone"_Evolve_2.mp4'
import twilightBeautyVid1 from '../images/Marius_"Twilight_Beauty"_Base.mp4'
import twilightBeautyVid2 from '../images/Marius_"Twilight_Beauty"_Evolve_1.mp4'
import twilightBeautyVid3 from '../images/Marius_"Twilight_Beauty"_Evolve_2.mp4'

import { useState } from 'react';
import FullScreenView from '../FullScreenView'

const mariusSrCards = [
    {
        key: 1,
        title: 'A Dance on the Clouds',
        basePicture: aDanceOnTheClouds,
        baseVid: aDanceOnTheCloudsVid1,
        evolVid1: aDanceOnTheCloudsVid2,
        evolVid2: aDanceOnTheCloudsVid3,
        videoSrc: 'https://www.youtube.com/embed/4OqJLxeCt4U'
    },
    {
        key: 2,
        title: 'Butterflies',
        basePicture: butterflies,
        baseVid: butterfliesVid1,
        evolVid1: butterfliesVid2,
        evolVid2: butterfliesVid3,
        videoSrc: 'https://www.youtube.com/embed/QCl4EYBD-bk'
    },
    {
        key: 3,
        title: 'Child at Heart',
        basePicture: childAtHeart,
        baseVid: childAtHeartVid1,
        evolVid1: childAtHeartVid2,
        evolVid2: childAtHeartVid3,
        videoSrc: 'https://www.youtube.com/embed/HySU9HPsW8U'
    },
    {
        key: 4,
        title: 'Dream of Thebes',
        basePicture: dreamOfThebes,
        baseVid: dreamOfThebesVid1,
        evolVid1: dreamOfThebesVid2,
        evolVid2: dreamOfThebesVid3,
        videoSrc: 'https://www.youtube.com/embed/i-A4BUxIQNE'
    },
    {
        key: 5,
        title: 'Falling into You',
        basePicture: fallingIntoYou,
        baseVid: fallingIntoYouVid1,
        evolVid1: fallingIntoYouVid2,
        evolVid2: fallingIntoYouVid3,
        videoSrc: 'https://www.youtube.com/embed/3ovte83cJkg'
        //CURRENTLY ONLY CHINESE VOICEOVER AVAILABLE
    },
    {
        key: 6,
        title: 'Overtone',
        basePicture: overtone,
        baseVid: overtoneVid1,
        evolVid1: overtoneVid2,
        evolVid2: overtoneVid3,
        videoSrc: 'https://www.youtube.com/embed/zpUE7Dy55yg'
    },
    {
        key: 7,
        title: 'Twilight Beauty',
        basePicture: twilightBeauty,
        baseVid: twilightBeautyVid1,
        evolVid1: twilightBeautyVid2,
        evolVid2: twilightBeautyVid3,
        videoSrc: 'https://www.youtube.com/embed/5nv2xs_WUUE'
    }
]

function MariusSr({ setVideoSrc, setHeader }) {
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
            <div className="sr-cards">
                {mariusSrCards.map((card) => {
                    return (<div className='card' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                        <h3 className="marius-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default MariusSr;