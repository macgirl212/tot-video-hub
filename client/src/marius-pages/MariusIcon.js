import mariusImg from '../images/450px-Marius_von_Hagen_promo.png'

function MariusIcon({ onClick }) {
    return (
        <div className="individual-section" id="marius-bg" onClick={onClick}>
            <img src={mariusImg} alt="Marius von Hagen" className="section-img" id="marius-section-img"></img>
            <h3 id="marius-name">Marius von Hagen</h3>
        </div>
    )
}

export default MariusIcon;