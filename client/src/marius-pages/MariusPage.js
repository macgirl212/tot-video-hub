import mariusLogo from '../images/Marius-Logo.png'
import MariusR from './MariusR.js'
import MariusSr from './MariusSr.js'
import MariusMr from './MariusMr.js'
import MariusSsr from './MariusSsr.js'
import Navbar from '../Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MariusPage() {
    const [header, setHeader] = useState('Marius von Hagen')
    const [selectR, setSelectR] = useState(false)
    const [selectSr, setSelectSr] = useState(false)
    const [selectMr, setSelectMr] = useState(false)
    const [selectSsr, setSelectSsr] = useState(false)
    const [videoSrc, setVideoSrc] = useState('https://www.youtube.com/embed/1j2kWZMGx4s')

    const findR = () => {
        setSelectR(selectR => !selectR)
        setSelectSr(false)
        setSelectMr(false)
        setSelectSsr(false)
        setVideoSrc('https://www.youtube.com/embed/1j2kWZMGx4s')
        setHeader("Marius von Hagen")
    }

    const findSr = () => {
        setSelectSr(selectSr => !selectSr)
        setSelectR(false)
        setSelectMr(false)
        setSelectSsr(false)
    }

    const findMr = () => {
        setSelectMr(selectMr => !selectMr)
        setSelectR(false)
        setSelectSr(false)
        setSelectSsr(false)
    }

    const findSsr = () => {
        setSelectSsr(selectSsr => !selectSsr)
        setSelectR(false)
        setSelectSr(false)
        setSelectMr(false)
    }

    return (
        <>
            <Navbar header={header} />
            <div className="purple-background">
                <Link to="/">
                    <button id="button">Back</button>
                </Link>
                <img src={mariusLogo} alt="Marius von Hagen" className="character-logo"></img>
                <div className="video-container">
                    <iframe className="screen" src={`${videoSrc}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="button-row">
                    <button className="card-button" onClick={findSsr}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/c/c9/SSR_icon.png/92px-SSR_icon.png" alt="SSR" /></button>
                    <button className="card-button" onClick={findMr}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/8/82/MR_icon.png/78px-MR_icon.png" alt="MR" /></button>
                    <button className="card-button" onClick={findSr}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/f/f7/SR_icon.png/76px-SR_icon.png" alt="SR" /></button>
                    <button className="card-button" onClick={findR}><img className="button-text" src="https://static.miraheze.org/tearsofthemiswiki/thumb/b/bf/R_icon.png/43px-R_icon.png" alt="R" /></button>
                </div>
                { selectR ? <MariusR /> : null }
                { selectSr ? <MariusSr setVideoSrc={setVideoSrc} setHeader={setHeader} /> : null }
                { selectMr ? <MariusMr setVideoSrc={setVideoSrc} setHeader={setHeader} /> : null }
                { selectSsr ? <MariusSsr setVideoSrc={setVideoSrc} setHeader={setHeader} /> : null}
            </div>
        </>
    )
}

export default MariusPage;