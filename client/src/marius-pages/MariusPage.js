import mariusLogo from '../images/Marius-Logo.png';
import MariusR from './MariusR';
import MariusSr from './MariusSr';
import MariusMr from './MariusMr';
import MariusSsr from './MariusSsr';
import ButtonRow from '../components/ButtonRow';
import VideoContainer from '../components/VideoContainer';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useContext, useEffect } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MariusPage() {
	// redux
	const { store } = useContext(ReactReduxContext);
	const buttonSelectors = useSelector((state) => state.cards);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/1j2kWZMGx4s'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Marius+von+Hagen'
	);
	const [chosenCard, setChosenCard] = useState();

	// r cards click handler
	const findR = () => {
		store.dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/1j2kWZMGx4s');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Marius+von+Hagen'
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
			store.dispatch({ type: 'TITLE', payload: 'Marius von Hagen' });
		} else {
			store.dispatch({ type: 'TITLE', payload: chosenCard.title });
		}
	});

	return (
		<div className="purple-background">
			<Link to="/">
				<button id="button">Back</button>
			</Link>
			<img
				src={mariusLogo}
				alt="Marius von Hagen"
				className="character-logo"
			></img>
			<VideoContainer videoSrc={videoSrc} />
			<ButtonRow findR={findR} />
			<AltLinkButton onClick={selectYTSearch} />
			{buttonSelectors.R ? <MariusR /> : null}
			{buttonSelectors.MR ? (
				<MariusMr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SR ? (
				<MariusSr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SSR ? (
				<MariusSsr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
		</div>
	);
}

export default MariusPage;
