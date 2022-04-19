import lukeImg from '../images/450px-Luke_Pearce_promo.png'

function LukeIcon({ onClick }) {
    return (
        <div className="individual-section" id="luke-bg" onClick={onClick}>
            <img src={lukeImg} alt="Luke Pearce" className="section-img" id="luke-section-img"></img>
            <h3 id="luke-name">Luke Pearce</h3>
        </div>
    )
}

export default LukeIcon;