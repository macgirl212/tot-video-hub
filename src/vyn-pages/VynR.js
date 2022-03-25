import aHobbyOfMine from '../images/600px-Vyn__A_Hobby_of_Mine__Base.png'
import anotherSideOfYou from '../images/600px-Vyn__Another_Side_of_You__Base.png'
import dressedUp from '../images/600px-Vyn__Dressed_Up__Base.png'
import elegance from '../images/600px-Vyn__Elegance__Base.png'
import gentlemanlyCourtesy from '../images/600px-Vyn__Gentlemanly_Courtesy__Base.png'
import leisureTime from '../images/600px-Vyn__Leisure_Time__Base.png'
import observations from '../images/600px-Vyn__Observations__Base.png'
import remainingInControl from '../images/600px-Vyn__Remaining_in_Control__Base.png'
import unexpectedLetter from '../images/600px-Vyn__Unexpected_Letter__Base.png'
import unexpectedRunIn from '../images/600px-Vyn__Unexpected_Run-In__Base.png'

const vynRCards = [
    {
        key: 1,
        title: 'A Hobby of Mine',
        basePicture: aHobbyOfMine
    },
    {
        key: 2,
        title: 'Another Side of You',
        basePicture: anotherSideOfYou
    },
    {
        key: 3,
        title: 'Dressed Up',
        basePicture: dressedUp
    },
    {
        key: 4,
        title: 'Elegance',
        basePicture: elegance
    },
    {
        key: 5,
        title: 'Gentlemanly Courtesy',
        basePicture: gentlemanlyCourtesy
    },
    {
        key: 6,
        title: 'Leisure Time',
        basePicture: leisureTime
    },
    {
        key: 7,
        title: 'Observations',
        basePicture: observations
    },
    {
        key: 8,
        title: 'Remaining in Control',
        basePicture: remainingInControl
    },
    {
        key: 9,
        title: 'Unexpected Letter',
        basePicture: unexpectedLetter
    },
    {
        key: 10,
        title: 'Unexpected Run-In',
        basePicture: unexpectedRunIn
    }
]

function VynR() {
    return (
        <div className="r-cards">
            {vynRCards.map((card) => {
                return (<div className='card r-bumper' key={card.key}>
                    <h3 className="vyn-card-title">{card.title}</h3>
                    <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                </div>)
            })}
        </div>
    )
}

export default VynR;