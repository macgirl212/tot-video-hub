import './stylesheets/fullScreenView.css'

import React, { useState } from 'react';

function FullScreenView({ card, className, setShowFullScreen }) {
    const { baseVid, evolVid1, evolVid2 } = card.data
    let videoArray = [baseVid, evolVid1]

    if (evolVid2 !== "") {
        videoArray.push(evolVid2)
    }

    let [videoLoop, setVideoLoop] = useState(0)
    let [videoLoopSrc, setVideoLoopSrc] = useState(baseVid)

    const CardVideo = () => {
        return (
            <video className="full-card-video" autoPlay muted loop>
                <source src={`http://localhost:3001/api/v1/media/${videoLoopSrc}`}></source>
            </video>
        )
    }

    const prevButton = () => {
        if (videoLoop !== 0) {
            setVideoLoop(videoLoop = videoLoop - 1)
        } else {
            setVideoLoop(videoLoop = videoArray.length - 1)
        }
        setVideoLoopSrc(videoLoopSrc = videoArray[videoLoop])
    }

    const nextButton = () => {
        if (videoLoop !== videoArray.length - 1) {
            setVideoLoop(videoLoop = videoLoop + 1)
        } else {
            setVideoLoop(videoLoop = 0)
        }
        setVideoLoopSrc(videoLoopSrc = videoArray[videoLoop])
    }

    return (
        <div id="fs-overlay">
            <button id="button" onClick={() => {setShowFullScreen(false)}}>Back</button>
            <div className="media-row">
            <div className={`${className} arrows left`} onClick={prevButton}>&lt;</div>
                <CardVideo />
            <div className={`${className} arrows right`} onClick={nextButton}>&gt;</div>
            </div>
        </div>
    )
}

export default FullScreenView;