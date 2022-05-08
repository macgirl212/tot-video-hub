import { useState, useEffect } from 'react'
import axios from 'axios'

function ArtemR() {
    const [cards, setCards] = useState([])
    
    async function getRCards() {
        // get card json from backend
        await axios.get('http://localhost:3001/api/v1/artem?type=r', {
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
        getRCards()
    }, [])

    return (
        <div className="r-cards">
            {cards.map((card) => {
                return (<div className='card r-bumper' key={card._id}>
                    <h3 className="artem-card-title">{card.title}</h3>
                    <img className="card-img" src={`${card.previewPicture}`} alt={`${card.title}`} />
                </div>)
            })}
        </div>
    )
}

export default ArtemR;