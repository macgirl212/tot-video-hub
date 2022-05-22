import artemLogo from '../images/Artem-Logo.png';
import ArtemR from './ArtemR';
import ArtemSr from './ArtemSr';
import ArtemMr from './ArtemMr';
import ArtemSsr from './ArtemSsr';
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

function ArtemPage() {
	const [header, setHeader] = useState('Artem Wing');
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/YXy2wSvKI3A'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Artem+Wing'
	);
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	const findR = () => {
		dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/YXy2wSvKI3A');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Artem+Wing'
		);
		setHeader('Artem Wing');
	};

	const selectYTSearch = () => {
		window.open(youTubeSearch);
	};

	return (
		<>
			<Navbar header={header} />
			<div className="red-background">
				<Link to="/">
					<button id="button">Back</button>
				</Link>
				<img src={artemLogo} alt="Artem Wing" className="character-logo"></img>
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
				{state.R ? <ArtemR /> : null}
				{state.SR ? (
					<ArtemSr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.MR ? (
					<ArtemMr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
				{state.SSR ? (
					<ArtemSsr
						setVideoSrc={setVideoSrc}
						setHeader={setHeader}
						setYouTubeSearch={setYouTubeSearch}
					/>
				) : null}
			</div>
		</>
	);
}

export default ArtemPage;
