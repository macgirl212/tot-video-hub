import discussion from '../images/600px-Marius__Discussion__Base.png'
import freezeFrame from '../images/Marius_"Freeze-Frame"_Base.png'
import fullyPrepped from '../images/600px-Marius__Fully_Prepped__Base.png'
import halfTime from '../images/600px-Marius__Half-Time__Base.png'
import interlude from '../images/600px-Marius__Interlude__Base.png'
import invitation from '../images/600px-Marius__Invitation__Base.png'
import myth from '../images/Marius_"Myth"_Base.png'
import practiceMakesPerfect from '../images/600px-Marius__Practice_Makes_Perfect__Base.png'
import presense from '../images/600px-Marius__Presence__Base.png'
import rhythm from '../images/600px-Marius__Rhythm__Base.png'
import suddenOccurance from '../images/600px-Marius__Sudden_Occurrence__Base.png'
import victoryIsAtHand from '../images/Marius_"Victory_Is_at_Hand"_Base.png'

const mariusRCards = [
    {
        key: 1,
        title: 'Discussion',
        basePicture: discussion
    },
    {
        key: 2,
        title: 'Freeze-Frame',
        basePicture: freezeFrame
    },
    {
        key: 3,
        title: 'Fully Prepped',
        basePicture: fullyPrepped
    },
    {
        key: 4,
        title: 'Half-Time',
        basePicture: halfTime
    },
    {
        key: 5,
        title: 'Interlude',
        basePicture: interlude
    },
    {
        key: 6,
        title: 'Invitation',
        basePicture: invitation
    },
    {
        key: 7,
        title: 'Myth',
        basePicture: myth
    },
    {
        key: 8,
        title: 'Practice Makes Perfect',
        basePicture: practiceMakesPerfect
    },
    {
        key: 9,
        title: 'Presense',
        basePicture: presense
    },
    {
        key: 10,
        title: 'Rhythm',
        basePicture: rhythm
    },
    {
        key: 11,
        title: 'Sudden Occurance',
        basePicture: suddenOccurance
    },
    {
        key: 12,
        title: 'Victory Is At Hand',
        basePicture: victoryIsAtHand
    }
]

function MariusR() {
    return (
        <div className="r-cards">
            {mariusRCards.map((card) => {
                return (<div className='card r-bumper' key={card.key}>
                    <h3 className="marius-card-title">{card.title}</h3>
                    <img className="card-img" src={`${card.basePicture}`} alt=''></img>
                </div>)
            })}
        </div>
    )
}

export default MariusR;