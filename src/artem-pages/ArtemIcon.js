import artemImg from '../images/450px-Artem_Wing_promo.png'

function ArtemIcon({onClick}) {
    return (
        <div className="individual-section" id="artem-bg" onClick={onClick}>
            <img src={artemImg} alt="Artem Wing" className="section-img" id="artem-section-img"></img>
            <h3 id="artem-name">Artem Wing</h3>
        </div>
    )
}

export default ArtemIcon;