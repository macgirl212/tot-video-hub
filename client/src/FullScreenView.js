import './stylesheets/fullScreenView.css'

import React, { useState } from 'react';

function FullScreenView({ onClick, source1, source2, source3, className }) {
    let videoArray = []
    if (source3 !== undefined) {
        videoArray.push(source1, source2, source3)
    } else {
        videoArray.push(source1, source2)
    }

    let [videoLoop, setVideoLoop] = useState(0)
    let [videoLoopSrc, setVideoLoopSrc] = useState(source1)

    const CardVideo = () => {
        return (
            <video className="full-card-video" autoPlay muted loop>
                <source src={videoLoopSrc}></source>
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
            <button id="button" onClick={onClick}>Back</button>
            <div className="media-row">
            <div className={`${className} arrows left`} onClick={prevButton}>&lt;</div>
                <CardVideo />
            <div className={`${className} arrows right`} onClick={nextButton}>&gt;</div>
            </div>
        </div>
    )
}

export default FullScreenView;