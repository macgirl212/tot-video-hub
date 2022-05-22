import artemLogo from '../images/Artem-Logo.png';
import ArtemR from './ArtemR';
import ArtemSr from './ArtemSr';
import ArtemMr from './ArtemMr';
import ArtemSsr from './ArtemSsr';
import initialCardsState from '../store/states/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import SSRButton from '../components/buttons/SSRButton';
import SRButton from '../components/buttons/SRButton';
import MRButton from '../components/buttons/MRButton';
import RButton from '../components/buttons/RButton';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useReducer, useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link } from 'react-router-dom';

function ArtemPage() {
	// redux
	const { store } = useContext(ReactReduxContext);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/YXy2wSvKI3A'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Artem+Wing'
	);
	const [chosenCard, setChosenCard] = useState();

	// local reducer
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	// r cards click handler
	const findR = () => {
		dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/YXy2wSvKI3A');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Artem+Wing'
		);
		setChosenCard();
	};

	// opens a new window for alternate videos
	const selectYTSearch = () => {
		window.open(youTubeSearch);
	};

	useEffect(() => {
		// changes navbar title as needed
		if (!chosenCard) {
			store.dispatch({ type: 'TITLE', payload: 'Artem Wing' });
		} else {
			store.dispatch({ type: 'TITLE', payload: chosenCard.title });
		}
	});

	return (
		<>
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
						setYouTubeSearch={setYouTubeSearch}
						setChosenCard={setChosenCard}
					/>
				) : null}
				{state.MR ? (
					<ArtemMr
						setVideoSrc={setVideoSrc}
						setYouTubeSearch={setYouTubeSearch}
						setChosenCard={setChosenCard}
					/>
				) : null}
				{state.SSR ? (
					<ArtemSsr
						setVideoSrc={setVideoSrc}
						setYouTubeSearch={setYouTubeSearch}
						setChosenCard={setChosenCard}
					/>
				) : null}
			</div>
		</>
	);
}

export default ArtemPage;
