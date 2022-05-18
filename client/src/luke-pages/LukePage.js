import lukeLogo from '../images/Luke-Logo.png';
import LukeR from './LukeR.js';
import LukeSr from './LukeSr.js';
import LukeMr from './LukeMr.js';
import LukeSsr from './LukeSsr.js';
import Navbar from '../Navbar';
import initialCardsState from '../store/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

function LukePage() {
	const [header, setHeader] = useState('Luke Pearce');
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/w4cQ70fAh2Q'
	);
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	const findR = () => {
		dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/w4cQ70fAh2Q');
		setHeader('Luke Pearce');
	};

	return (
		<>
			<Navbar header={header} />
			<div className="yellow-background">
				<Link to="/">
					<button id="button">Back</button>
				</Link>
				<img src={lukeLogo} alt="Luke Pearce" className="character-logo"></img>
				<div className="video-container">
					<iframe
						className="screen"
						src={`${videoSrc}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
				<div className="button-row">
					<button
						className="card-button"
						onClick={() => dispatch({ type: 'SSR' })}
					>
						<img
							className="button-text"
							src="https://static.miraheze.org/tearsofthemiswiki/thumb/c/c9/SSR_icon.png/92px-SSR_icon.png"
							alt="SSR"
						/>
					</button>
					<button
						className="card-button"
						onClick={() => dispatch({ type: 'MR' })}
					>
						<img
							className="button-text"
							src="https://static.miraheze.org/tearsofthemiswiki/thumb/8/82/MR_icon.png/78px-MR_icon.png"
							alt="MR"
						/>
					</button>
					<button
						className="card-button"
						onClick={() => dispatch({ type: 'SR' })}
					>
						<img
							className="button-text"
							src="https://static.miraheze.org/tearsofthemiswiki/thumb/f/f7/SR_icon.png/76px-SR_icon.png"
							alt="SR"
						/>
					</button>
					<button className="card-button" onClick={findR}>
						<img
							className="button-text"
							src="https://static.miraheze.org/tearsofthemiswiki/thumb/b/bf/R_icon.png/43px-R_icon.png"
							alt="R"
						/>
					</button>
				</div>
				{state.R ? <LukeR /> : null}
				{state.SR ? (
					<LukeSr setVideoSrc={setVideoSrc} setHeader={setHeader} />
				) : null}
				{state.MR ? (
					<LukeMr setVideoSrc={setVideoSrc} setHeader={setHeader} />
				) : null}
				{state.SSR ? (
					<LukeSsr setVideoSrc={setVideoSrc} setHeader={setHeader} />
				) : null}
			</div>
		</>
	);
}

export default LukePage;
