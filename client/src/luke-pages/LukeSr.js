import { useState, useEffect } from 'react';
import FullScreenView from '../FullScreenView'
import axios from 'axios'

function LukeSr({ setVideoSrc, setHeader }) {
    let [showFullScreen, setShowFullScreen] = useState(false)
    let [fullCard, setFullCard] = useState()
    const [cards, setCards] = useState([])

    const fullScreen = async (card) => {
        // get card json data
        await axios.get(`http://localhost:3001/api/v1/${card._id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            // store json data in cards state
            setFullCard(data)
            setShowFullScreen(showFullScreen = !showFullScreen) 
            }
        )
    }

    const selectCard = async (card) => {
        // set video embed link and header
        setVideoSrc(card.youTubeSrc)
        setHeader(card.title)
    }

    async function getSrCards() {
        // get card json from backend
        await axios.get('http://localhost:3001/api/v1/luke?type=sr', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            // store json data in cards state
            setCards(data.data)
            }
        )
    }

    useEffect(() => {
        getSrCards()
    }, [])

    return (
        <div>
            { showFullScreen ? 
                <FullScreenView
                    className={`luke-buttons`}
                    card={fullCard}
                    onClick={() => fullScreen()}
                    setShowFullScreen={setShowFullScreen}
                /> : null }
            <div className="sr-cards">
                {cards.map((card) => {
                    return (
                        <div className='card' key={card._id} onClick={() => selectCard(card)} onDoubleClick={() => fullScreen(card)}>
                            <h3 className="luke-card-title">{card.title}</h3>
                            <img className="card-img" src={`${card.previewPicture}`} alt={`${card.previewPicture}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default LukeSr;