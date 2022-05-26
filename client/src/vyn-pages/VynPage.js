import vynLogo from '../images/Vyn-Logo.png';
import VynR from './VynR';
import VynSr from './VynSr';
import VynMr from './VynMr';
import VynSsr from './VynSsr';
import ButtonRow from '../components/ButtonRow';
import VideoContainer from '../components/VideoContainer';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useContext, useEffect } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function VynPage() {
	// redux
	const { store } = useContext(ReactReduxContext);
	const buttonSelectors = useSelector((state) => state.cards);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/qn4zDDSxP24'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Vyn+Richter'
	);
	const [chosenCard, setChosenCard] = useState();

	// r cards click handler
	const findR = () => {
		store.dispatch({ type: 'R' });
		setVideoSrc('https://www.youtube.com/embed/qn4zDDSxP24');
		setYouTubeSearch(
			'https://www.youtube.com/results?search_query=Tears+of+Themis+Vyn+Richter'
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
			store.dispatch({ type: 'TITLE', payload: 'Vyn Richter' });
		} else {
			store.dispatch({ type: 'TITLE', payload: chosenCard.title });
		}
	});

	return (
		<div className="green-background">
			<Link to="/">
				<button id="button">Back</button>
			</Link>
			<img src={vynLogo} alt="Vyn Richter" className="character-logo"></img>
			<VideoContainer videoSrc={videoSrc} />
			<ButtonRow findR={findR} />
			<AltLinkButton onClick={selectYTSearch} />
			{buttonSelectors.R ? <VynR /> : null}
			{buttonSelectors.MR ? (
				<VynMr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SR ? (
				<VynSr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SSR ? (
				<VynSsr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
		</div>
	);
}

export default VynPage;
