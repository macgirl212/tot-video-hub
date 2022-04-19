import './stylesheets/home.css'
import './stylesheets/pages.css'
import ArtemIcon from './artem-pages/ArtemIcon.js'
import ArtemPage from './artem-pages/ArtemPage.js'
import LukeIcon from './luke-pages/LukeIcon.js'
import LukePage from './luke-pages/LukePage.js'
import MariusIcon from './marius-pages/MariusIcon.js'
import MariusPage from './marius-pages/MariusPage.js'
import VynIcon from './vyn-pages/VynIcon.js'
import VynPage from './vyn-pages/VynPage.js'
import React, { useEffect, useState } from 'react';

function Home({ setHeader }) {
    const [showArtem, setShowArtem] = useState(false)
    const [showLuke, setShowLuke] = useState(false)
    const [showMarius, setShowMarius] = useState(false)
    const [showVyn, setShowVyn] = useState(false)

    const selectArtem = () => {
        setShowArtem(showArtem => !showArtem)
        if (!showArtem) {
            setHeader("Artem Wing")
        } else {
            setHeader("Video Hub")
        }
    }

    const selectLuke = () => {
        setShowLuke(showLuke => !showLuke)
        if (!showLuke) {
            setHeader("Luke Pearce")
        } else {
            setHeader("Video Hub")
        }
    }

    const selectMarius = () => {
        setShowMarius(showMarius => !showMarius)
        if (!showMarius) {
            setHeader("Marius von Hagen")
        } else {
            setHeader("Video Hub")
        }
    }

    const selectVyn = () => {
        setShowVyn(showVyn => !showVyn)
        if (!showVyn) {
            setHeader("Vyn Richter")
        } else {
            setHeader("Video Hub")
        }
    }

    useEffect(() => {}, [showArtem])
    useEffect(() => {}, [showLuke])
    useEffect(() => {}, [showMarius])
    useEffect(() => {}, [showVyn])

    return (
        <div className="sections">
            <ArtemIcon onClick={selectArtem} />
            { showArtem ? <ArtemPage onClick={selectArtem} setHeader={setHeader} /> : null }
            <LukeIcon onClick={selectLuke} />
            { showLuke ? <LukePage onClick={selectLuke} setHeader={setHeader} /> : null}
            <MariusIcon onClick={selectMarius} />
            { showMarius ? <MariusPage onClick={selectMarius} setHeader={setHeader} /> : null}
            <VynIcon onClick={selectVyn} />
            { showVyn ? <VynPage onClick={selectVyn} setHeader={setHeader} /> : null}
        </div>
    )
}

export default Home;