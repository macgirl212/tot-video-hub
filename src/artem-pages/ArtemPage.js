import artemLogo from '../images/Artem-Logo.png'
import ArtemR from './ArtemR.js'
import ArtemSr from './ArtemSr.js'
import ArtemSsr from './ArtemSsr.js'
import { useEffect, useState } from 'react';

function ArtemPage({ onClick, setHeader }) {
    const [selectR, setSelectR] = useState(false)
    const [selectSr, setSelectSr] = useState(false)
    const [selectSsr, setSelectSsr] = useState(false)
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/YXy2wSvKI3A')

    const findR = () => {
        setSelectR(selectR => !selectR)
        setSelectSr(false)
        setSelectSsr(false)
        setVideoSrc('https://www.youtube.com/embed/YXy2wSvKI3A')
        setHeader("Artem Wing")
    }

    const findSr = () => {
        setSelectSr(selectSr => !selectSr)
        setSelectR(false)
        setSelectSsr(false)
    }

    const findSsr = () => {
        setSelectSsr(selectSsr => !selectSsr)
        setSelectR(false)
        setSelectSr(false)
    }

    useEffect(() => {}, [findR])
    useEffect(() => {}, [findSr])
    useEffect(() => {}, [findSsr])

    return (
        <div className="red-background">
            <button id="button" onClick={onClick}>Back</button>
            <img src={artemLogo} alt="Artem Wing" className="character-logo"></img>
            <iframe className="screen" width="640" height="360" src={`${videoSrc}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="button-row">
                <button className="card-button" onClick={() => findSsr()}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/c/c9/SSR_icon.png/92px-SSR_icon.png" alt="SSR"></img></button>
                <button className="card-button" onClick={() => findSr()}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/f/f7/SR_icon.png/76px-SR_icon.png" alt="SR"></img></button>
                <button className="card-button" onClick={() => findR()}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/b/bf/R_icon.png/43px-R_icon.png" alt="R"></img></button>
            </div>
            { selectR ? <ArtemR /> : null }
            { selectSr ? <ArtemSr setVideoSrc={setVideoSrc} setHeader={setHeader} /> : null}
            { selectSsr ? <ArtemSsr setVideoSrc={setVideoSrc} setHeader={setHeader} /> : null}
        </div>
    )
}

export default ArtemPage;