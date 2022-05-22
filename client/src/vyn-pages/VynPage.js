import vynLogo from '../images/Vyn-Logo.png';
import VynR from './VynR';
import VynSr from './VynSr';
import VynMr from './VynMr';
import VynSsr from './VynSsr';
import Navbar from '../Navbar';
import initialCardsState from '../store/states/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import SSRButton from '../components/buttons/SSRButton';
import SRButton from '../components/buttons/SRButton';
import MRButton from '../components/buttons/MRButton';
import RButton from '../components/buttons/RButton';
import AltLinkButton from '../components/AltLinkButton';
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
					<SSRButton onClick={() => dispatch({ type: 'SSR' })} />
					<SRButton onClick={() => dispatch({ type: 'SR' })} />
					<MRButton onClick={() => dispatch({ type: 'MR' })} />
					<RButton onClick={findR} />
				</div>
				<AltLinkButton onClick={selectYTSearch} />
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
