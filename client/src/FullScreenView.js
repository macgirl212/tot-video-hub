import './stylesheets/fullScreenView.css'

import React, { useState } from 'react';

function FullScreenView({ card, className, setShowFullScreen }) {
    
    const { baseVid, evolVid1, evolVid2, type } = card.data
    let videoArray = [baseVid, evolVid1]

    let [videoLoop, setVideoLoop] = useState(0)
    let [videoLoopSrc, setVideoLoopSrc] = useState(baseVid)


    // if card is of sr or ssr rarity, add the final evolution video to the video array
    if (type === 'sr' || type === 'ssr') {
        videoArray.push(evolVid2)
    }

    const CardVideo = () => {
        // get video from backend
        return (
            <video className="full-card-video" autoPlay muted loop>
                <source src={`http://localhost:3001/api/v1/media/${videoLoopSrc}`}></source>
            </video>
        )
    }

    const prevButton = () => {
        // go backwards through the video source array or loop to the end if necessary
        if (videoLoop !== 0) {
            setVideoLoop(videoLoop = videoLoop - 1)
        } else {
            setVideoLoop(videoLoop = videoArray.length - 1)
        }
        setVideoLoopSrc(videoLoopSrc = videoArray[videoLoop])
    }

    const nextButton = () => {
        // go forwards through the video source array or loop to the beginning if necessary
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