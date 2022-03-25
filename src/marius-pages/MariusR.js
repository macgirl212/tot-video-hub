import discussion from '../images/600px-Marius__Discussion__Base.png'
import fullyPrepped from '../images/600px-Marius__Fully_Prepped__Base.png'
import halfTime from '../images/600px-Marius__Half-Time__Base.png'
import interlude from '../images/600px-Marius__Interlude__Base.png'
import invitation from '../images/600px-Marius__Invitation__Base.png'
import practiceMakesPerfect from '../images/600px-Marius__Practice_Makes_Perfect__Base.png'
import presense from '../images/600px-Marius__Presence__Base.png'
import rhythm from '../images/600px-Marius__Rhythm__Base.png'
import suddenOccurance from '../images/600px-Marius__Sudden_Occurrence__Base.png'

const mariusRCards = [
    {
        key: 1,
        title: 'Discussion',
        basePicture: discussion
    },
    {
        key: 2,
        title: 'Fully Prepped',
        basePicture: fullyPrepped
    },
    {
        key: 3,
        title: 'Half-Time',
        basePicture: halfTime
    },
    {
        key: 4,
        title: 'Interlude',
        basePicture: interlude
    },
    {
        key: 5,
        title: 'Invitation',
        basePicture: invitation
    },
    {
        key: 6,
        title: 'Practice Makes Perfect',
        basePicture: practiceMakesPerfect
    },
    {
        key: 7,
        title: 'Presense',
        basePicture: presense
    },
    {
        key: 8,
        title: 'Rhythm',
        basePicture: rhythm
    },
    {
        key: 9,
        title: 'Sudden Occurance',
        basePicture: suddenOccurance
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