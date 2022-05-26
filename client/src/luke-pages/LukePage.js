import lukeLogo from '../images/Luke-Logo.png';
import LukeR from './LukeR';
import LukeSr from './LukeSr';
import LukeMr from './LukeMr';
import LukeSsr from './LukeSsr';
import ButtonRow from '../components/ButtonRow';
import VideoContainer from '../components/VideoContainer';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useContext, useEffect } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function LukePage() {
	// redux
	const { store } = useContext(ReactReduxContext);
	const buttonSelectors = useSelector((state) => state.cards);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/w4cQ70fAh2Q'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Luke+Pearce'
	);
	const [chosenCard, setChosenCard] = useState();

	// r cards click handler
	const findR = () => {
		store.dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/w4cQ70fAh2Q');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Luke+Pearce'
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
			store.dispatch({ type: 'TITLE', payload: 'Luke Pearce' });
		} else {
			store.dispatch({ type: 'TITLE', payload: chosenCard.title });
		}
	});

	return (
		<div className="yellow-background">
			<Link to="/">
				<button id="button">Back</button>
			</Link>
			<img src={lukeLogo} alt="Luke Pearce" className="character-logo"></img>
			<VideoContainer videoSrc={videoSrc} />
			<ButtonRow findR={findR} />
			<AltLinkButton onClick={selectYTSearch} />
			{buttonSelectors.R ? <LukeR /> : null}
			{buttonSelectors.MR ? (
				<LukeMr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SR ? (
				<LukeSr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SSR ? (
				<LukeSsr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
		</div>
	);
}

export default LukePage;
