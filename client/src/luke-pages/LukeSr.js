//426x900 images
import aStarInThePalm from '../images/Luke_"A_Star_in_the_Palm".png'
import amongTheGreatBlue from '../images/Luke_"Among_the_Great_Blue".png'
import howIRememberYou from '../images/Luke_"How_I_Remember_You".png'
import innerSanctum from '../images/Luke_"Inner_Sanctum".png'
import momentOfDanger from '../images/Luke_"Moment_of_Danger".png'
import onceUponATime from '../images/Luke_"Once_Upon_a_Time".png'
import radiantSunlight from '../images/Luke_"Radiant_Sunlight".png'
import timelyRescue from '../images/Luke_"Timely_Rescue".png'
import togetherWithYou from '../images/Luke_"Together_with_You".png'

//1080x1920 videos
import aStarInThePalmVid1 from '../images/Luke_ "A_Star_in_the_Palm"_Base.mp4'
import aStarInThePalmVid2 from '../images/Luke_ "A_Star_in_the_Palm"_Evolve_1.mp4'
import aStarInThePalmVid3 from '../images/Luke_ "A_Star_in_the_Palm"_Evolve_2.mp4'
import amongTheGreatBlueVid1 from '../images/Luke_"Among_the_Great_Blue"_Base.mp4'
import amongTheGreatBlueVid2 from '../images/Luke_"Among_the_Great_Blue"_Evolve_1.mp4'
import amongTheGreatBlueVid3 from '../images/Luke_"Among_the_Great_Blue"_Evolve_2.mp4'
import howIRememberYouVid1 from '../images/Luke_"How_I_Remember_You"_Base.mp4'
import howIRememberYouVid2 from '../images/Luke_"How_I_Remember_You"_Evolve_1.mp4'
import howIRememberYouVid3 from '../images/Luke_"How_I_Remember_You"_Evolve_2.mp4'
import innerSanctumVid1 from '../images/Luke_"Inner_Sanctum"_Base.mp4'
import innerSanctumVid2 from '../images/Luke_"Inner_Sanctum"_Evolve_1.mp4'
import innerSanctumVid3 from '../images/Luke_"Inner_Sanctum"_Evolve_2.mp4'
import momentOfDangerVid1 from '../images/Luke_"Moment_of_Danger"_Base.mp4'
import momentOfDangerVid2 from '../images/Luke_"Moment_of_Danger"_Evolve_1.mp4'
import momentOfDangerVid3 from '../images/Luke_"Moment_of_Danger"_Evolve_2.mp4'
import onceUponATimeVid1 from '../images/Luke_"Once_Upon_a_Time"_Base.mp4'
import onceUponATimeVid2 from '../images/Luke_"Once_Upon_a_Time"_Evolve_1.mp4'
import onceUponATimeVid3 from '../images/Luke_"Once_Upon_a_Time"_Evolve_2.mp4'
import radiantSunlightVid1 from '../images/Luke_"Radiant_Sunlight"_Base.mp4'
import radiantSunlightVid2 from '../images/Luke_"Radiant_Sunlight"_Evolve_1.mp4'
import radiantSunlightVid3 from '../images/Luke_"Radiant_Sunlight"_Evolve_2.mp4'
import timelyRescueVid1 from '../images/Luke_"Timely_Rescue"_Base.mp4'
import timelyRescueVid2 from '../images/Luke_"Timely_Rescue"_Evolve_1.mp4'
import timelyRescueVid3 from '../images/Luke_"Timely_Rescue"_Evolve_2.mp4'
import togetherWithYouVid1 from '../images/Luke_"Together_with_You"_Base.mp4'
import togetherWithYouVid2 from '../images/Luke_"Together_with_You"_Evolve_1.mp4'
import togetherWithYouVid3 from '../images/Luke_"Together_with_You"_Evolve_2.mp4'

import React, { useState } from 'react';
import FullScreenView from '../FullScreenView'

const lukeSrCards = [
    {
        key: 1,
        title: 'A Star in the Palm',
        basePicture: aStarInThePalm,
        baseVid: aStarInThePalmVid1,
        evolVid1: aStarInThePalmVid2,
        evolVid2: aStarInThePalmVid3,
        videoSrc: 'https://www.youtube.com/embed/GBjXP1RsgqU'
    },
    {
        key: 2,
        title: 'Among the Great Blue',
        basePicture: amongTheGreatBlue,
        baseVid: amongTheGreatBlueVid1,
        evolVid1: amongTheGreatBlueVid2,
        evolVid2: amongTheGreatBlueVid3,
        videoSrc: 'https://www.youtube.com/embed/KWVHFFHbECQ'
    },
    {
        key: 3,
        title: 'How I Remember You',
        basePicture: howIRememberYou,
        baseVid: howIRememberYouVid1,
        evolVid1: howIRememberYouVid2,
        evolVid2: howIRememberYouVid3,
        videoSrc: 'https://www.youtube.com/embed/mRO8m6dz7zM'
    },
    {
        key: 4,
        title: 'Inner Sanctum',
        basePicture: innerSanctum,
        baseVid: innerSanctumVid1,
        evolVid1: innerSanctumVid2,
        evolVid2: innerSanctumVid3,
        videoSrc: 'https://www.youtube.com/embed/jCLd0QBPS_E'
    },
    {
        key: 5,
        title: 'Moment of Danger',
        basePicture: momentOfDanger,
        baseVid: momentOfDangerVid1,
        evolVid1: momentOfDangerVid2,
        evolVid2: momentOfDangerVid3,
        videoSrc: 'https://www.youtube.com/embed/_44wFxVszis'
    },
    {
        key: 6,
        title: 'Once Upon a Time',
        basePicture: onceUponATime,
        baseVid: onceUponATimeVid1,
        evolVid1: onceUponATimeVid2,
        evolVid2: onceUponATimeVid3,
        videoSrc: 'https://www.youtube.com/embed/LwHH9qwjEnE'
    },
    {
        key: 7,
        title: 'Radiant Sunlight',
        basePicture: radiantSunlight,
        baseVid: radiantSunlightVid1,
        evolVid1: radiantSunlightVid2,
        evolVid2: radiantSunlightVid3,
        videoSrc: 'https://www.youtube.com/embed/3U3Mcgc53HM'
    },
    {
        key: 8,
        title: 'Timely Rescue',
        basePicture: timelyRescue,
        baseVid: timelyRescueVid1,
        evolVid1: timelyRescueVid2,
        evolVid2: timelyRescueVid3,
        videoSrc: 'https://www.youtube.com/embed/kacW1R1QS1Y'
    },
    {
        key: 9,
        title: 'Together with You',
        basePicture: togetherWithYou,
        baseVid: togetherWithYouVid1,
        evolVid1: togetherWithYouVid2,
        evolVid2: togetherWithYouVid3,
        videoSrc: 'https://www.youtube.com/embed/WTyMKlUWITI'
    }
]

function LukeSr({ setVideoSrc, setHeader }) {
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
                    className={`luke-buttons`}
                    title={fullCard.title}
                    source1={fullCard.baseVid}
                    source2={fullCard.evolVid1}
                    source3={fullCard.evolVid2}
                    onClick={() => fullScreen()} 
                /> : null }
            <div className="sr-cards">
                {lukeSrCards.map((card) => {
                    return (<div className='card r-bumper' key={card.key} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                        <h3 className="luke-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default LukeSr;