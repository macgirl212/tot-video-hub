import mariusLogo from '../images/Marius-Logo.png';
import MariusR from './MariusR';
import MariusSr from './MariusSr';
import MariusMr from './MariusMr';
import MariusSsr from './MariusSsr';
import Navbar from '../Navbar';
import initialCardsState from '../store/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

function MariusPage() {
	const [header, setHeader] = useState('Marius von Hagen');
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/1j2kWZMGx4s'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Marius+von+Hagen'
	);
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	const findR = () => {
		dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/1j2kWZMGx4s');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Marius+von+Hagen'
		);
		setHeader('Marius von Hagen');
	};

	const selectYTSearch = () => {
		window.open(youTubeSearch);
	};

	return (
		<>
			<Navbar header={header} />
			<div className="purple-background">
				<Link to="/">
					<button id="button">Back</button>
				</Link>
				<img
					src={mariusLogo}
					alt="Marius von Hagen"
					className="character-logo"
				></img>
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
				<div>
					<p className="link" onClick={selectYTSearch}>
						Broken link? Find alternate videos here.
					</p>
				</div>
				{state.R ? <MariusR /> : null}
				{state.SR ? (
					<MariusSr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.MR ? (
					<MariusMr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.SSR ? (
					<MariusSsr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
			</div>
		</>
	);
}

export default MariusPage;
