import vynLogo from '../images/Vyn-Logo.png';
import VynR from './VynR';
import VynSr from './VynSr';
import VynMr from './VynMr';
import VynSsr from './VynSsr';
import Navbar from '../Navbar';
import initialCardsState from '../store/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';

function VynPage() {
	const [header, setHeader] = useState('Vyn Richter');
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/qn4zDDSxP24'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Vyn+Richter'
	);
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	const findR = () => {
		dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/qn4zDDSxP24');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Vyn+Richter'
		);
		setHeader('Vyn Richter');
	};

	const selectYTSearch = () => {
		window.open(youTubeSearch);
	};

	return (
		<>
			<Navbar header={header} />
			<div className="green-background">
				<Link to="/">
					<button id="button">Back</button>
				</Link>
				<img src={vynLogo} alt="Vyn Richter" className="character-logo"></img>
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
				{state.R ? <VynR /> : null}
				{state.SR ? (
					<VynSr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.MR ? (
					<VynMr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.SSR ? (
					<VynSsr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
			</div>
		</>
	);
}

export default VynPage;
