import lukeImg from '../images/450px-Luke_Pearce_promo.png'

function LukeIcon() {
    return (
        <div>
            <img src={lukeImg} alt="Luke Pearce" className="section-img" id="luke-section-img"></img>
            <h3 id="luke-name">Luke Pearce</h3>
        </div>
    )
}

export default LukeIcon;