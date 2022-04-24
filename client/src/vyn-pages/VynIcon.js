import vynImg from '../images/450px-Vyn_Richter_promo.png'

function VynIcon() {
    return (
        <div>
            <img src={vynImg} alt="Vyn Richter" className="section-img" id="vyn-section-img"></img>
            <h3 id="vyn-name">Vyn Richter</h3>
        </div>
    )
}

export default VynIcon;