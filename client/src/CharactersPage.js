import './stylesheets/home.scss';
import './stylesheets/pages.scss';
import ArtemIcon from './artem-pages/ArtemIcon.js';
import LukeIcon from './luke-pages/LukeIcon.js';
import MariusIcon from './marius-pages/MariusIcon.js';
import VynIcon from './vyn-pages/VynIcon.js';
import { Link } from 'react-router-dom';

function CharactersPage() {
	return (
		<div className="sections">
			<Link to="/artem" className="individual-section" id="artem-bg">
				<ArtemIcon />
			</Link>
			<Link to="/luke" className="individual-section" id="luke-bg">
				<LukeIcon />
			</Link>
			<Link to="/marius" className="individual-section" id="marius-bg">
				<MariusIcon />
			</Link>
			<Link to="/vyn" className="individual-section" id="vyn-bg">
				<VynIcon />
			</Link>
		</div>
	);
}

export default CharactersPage;
