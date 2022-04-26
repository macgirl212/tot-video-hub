import allReady from '../images/600px-Luke_"All_Ready"_Base.png'
import gaze from '../images/Luke_"Gaze"_Base.png'
import gourmet from '../images/600px-Luke_"Gourmet"_Base.png'
import greetings from '../images/600px-Luke_"Greetings"_Base.png'
import ourSecret from '../images/600px-Luke_"Our_Secret"_Base.png'
import partner from '../images/600px-Luke_"Partner"_Base.png'
import personalServer from '../images/600px-Luke_"Personal_Server"_Base.png'
import quietlyWaiting from '../images/Luke_"Quietly_Waiting"_Base.png'
import tiredness from '../images/600px-Luke_"Tiredness"_Base.png'
import together from '../images/Luke_"Together"_Base.png'
import waitingForYou from '../images/600px-Luke_"Waiting_for_You"_Base.png'
import warmHome from '../images/Luke_"Warm_Home"_Base.png'
import warmUp from '../images/600px-Luke_"Warm_Up"_Base.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

const lukeRCards = [
    {
        key: 1,
        title: 'All Ready',
        basePicture: allReady
    },
    {
        key: 2,
        title: 'Gaze',
        basePicture: gaze
    },
    {
        key: 3,
        title: 'Gourmet',
        basePicture: gourmet
    },
    {
        key: 4,
        title: 'Greetings',
        basePicture: greetings
    },
    {
        key: 5,
        title: 'Our Secret',
        basePicture: ourSecret
    },
    {
        key: 6,
        title: 'Partner',
        basePicture: partner
    },
    {
        key: 7,
        title: 'Personal Server',
        basePicture: personalServer
    },
    {
        key: 8,
        title: 'Quietly Waiting',
        basePicture: quietlyWaiting
    },
    {
        key: 9,
        title: 'Tiredness',
        basePicture: tiredness
    },
    {
        key: 10,
        title: 'Together',
        basePicture: together
    },
    {
        key: 11,
        title: 'Waiting for You',
        basePicture: waitingForYou
    },
    {
        key: 12,
        title: 'Warm Home',
        basePicture: warmHome
    },
    {
        key: 13,
        title: 'Warm Up',
        basePicture: warmUp
    }
]

function LukeR() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState()
    
    async function getRCards() {
        // get card json from backend
        await axios.get('http://localhost:3001/api/v1/luke?type=r', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            // store json data in cards state
            setCards(data.data)
            setLoading(true)
            }
        )
    }

    // try to call next axios get request here for images
    const getImages = async (fileName) => {
        // get images from backend
        const response = `http://localhost:3001/api/v1/media/${fileName}`
        return response
    }   

    useEffect(() => {
        getRCards()
    }, [])

    useEffect(() => {
        // while loading, let's try to get the picture data too
        if (loading) {
            console.log(cards[0].basePicture)
            const image = getImages(cards[0].basePicture)
            image.then((data) => {
                setImages(data)
            })
           setLoading(false)
        }
    }, [loading])

    return (
        <div className="r-cards">
            {lukeRCards.map((card) => {
                return (<div className='card r-bumper' key={card.key}>
                    <h3 className="luke-card-title">{card.title}</h3>
                    <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                </div>)
            })}
            { /* images ? <img src={images} /> : null */ }
        </div>
    )
}

export default LukeR;