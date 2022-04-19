import backToBusiness from '../images/600px-Artem_"Back_to_Business"_Base.png'
import backToBusiness2 from '../images/600px-Artem_"Back_to_Business"_Evolve_1.png'
import hereForYou from '../images/600px-Artem_"Here_for_You"_Base.png'
import lockAndLoad from '../images/600px-Artem_"Lock_and_Load"_Base.png'
import myHeartIsFlying from '../images/Artem_"My_Heart_is_Flying"_Base.png'
import patienceIsAVirtue from '../images/600px-Artem_"Patience_Is_a_Virtue"_Base.png'
import pickingAGift from '../images/600px-Artem_"Picking_a_Gift"_Base.png'
import questioning from '../images/600px-Artem_"Questioning"_Base.png'
import rainDrops from '../images/600px-Artem_"Rain_Drops"_Base.png'
import sweetTastes from '../images/Artem_"Sweet_Tastes"_Base.png'
import tailoredSuit from '../images/600px-Artem_"Tailored_Suit"_Base.png'
import takingABreather from '../images/600px-Artem_"Taking_a_Breather"_Base.png'
import withYou from '../images/Artem_"With_You"_Base.png'

const artemRCards = [
    {
        key: 1,
        title: 'Back to Business',
        alt: 'Back to Business',
        basePicture: backToBusiness,
        evolve1: backToBusiness2
    },
    {
        key: 2,
        title: 'Here for You',
        alt: 'Here for You',
        basePicture: hereForYou,
        evolve1: ''
    },
    {
        key: 3,
        title: 'Lock and Load',
        alt: 'Lock and Load',
        basePicture: lockAndLoad,
        evolve1: ''
    },
    {
        key: 4,
        title: 'My Heart is Flying',
        alt: 'My Heart is Flying',
        basePicture: myHeartIsFlying,
        evolve1: ''
    },
    {
        key: 5,
        title: 'Patience is a Virtue',
        alt: 'Patience is a Virtue',
        basePicture: patienceIsAVirtue,
        evolve1: ''
    },
    {
        key: 6,
        title: 'Picking a Gift',
        alt: 'Picking a Gift',
        basePicture: pickingAGift,
        evolve1: ''
    },
    {
        key: 7,
        title: 'Questioning',
        alt: 'Questioning',
        basePicture: questioning,
        evolve1: ''
    },
    {
        key: 8,
        title: 'Rain Drops',
        alt: 'Rain Drops',
        basePicture: rainDrops,
        evolve1: ''
    },
    {
        key: 9,
        title: 'Sweet Tastes',
        alt: 'Sweet Tastes',
        basePicture: sweetTastes,
        evolve1: ''
    },
    {
        key: 10,
        title: 'Tailored Suit',
        alt: 'Tailored Suit',
        basePicture: tailoredSuit,
        evolve1: ''
    },
    {
        key: 11,
        title: 'Taking a Breather',
        alt: 'Taking a Breather',
        basePicture: takingABreather,
        evolve1: ''
    },
    {
        key: 12,
        title: 'With You',
        alt: 'With You',
        basePicture: withYou,
        evolve1: ''
    }
]

function ArtemR() {
    return (
        <div>
            <div className="r-cards">
                {artemRCards.map((card) => {
                    return (<div className='card r-bumper' key={card.key}>
                        <h3 className="artem-card-title">{card.title}</h3>
                        <img className="card-img" src={`${card.basePicture}`} alt={`${card.alt}`}></img>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default ArtemR;