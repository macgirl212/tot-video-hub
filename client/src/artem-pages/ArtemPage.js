import artemLogo from '../images/Artem-Logo.png';
import ArtemR from './ArtemR';
import ArtemSr from './ArtemSr';
import ArtemMr from './ArtemMr';
import ArtemSsr from './ArtemSsr';
import SSRButton from '../components/buttons/SSRButton';
import SRButton from '../components/buttons/SRButton';
import MRButton from '../components/buttons/MRButton';
import RButton from '../components/buttons/RButton';
import VideoContainer from '../components/VideoContainer';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useContext, useEffect } from 'react';
import { ReactReduxContext, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ArtemPage() {
	// redux
	const { store } = useContext(ReactReduxContext);
	const buttonSelectors = useSelector((state) => state.cards);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/YXy2wSvKI3A'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Artem+Wing'
	);
	const [chosenCard, setChosenCard] = useState();

	// r cards click handler
	const findR = () => {
		store.dispatch({ type: 'R' });
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
		<div className="red-background">
			<Link to="/">
				<button id="button">Back</button>
			</Link>
			<img src={artemLogo} alt="Artem Wing" className="character-logo"></img>
			<VideoContainer videoSrc={videoSrc} />
			<div className="button-row">
				<SSRButton onClick={() => store.dispatch({ type: 'SSR' })} />
				<SRButton onClick={() => store.dispatch({ type: 'SR' })} />
				<MRButton onClick={() => store.dispatch({ type: 'MR' })} />
				<RButton onClick={findR} />
			</div>
			<AltLinkButton onClick={selectYTSearch} />
			{buttonSelectors.R ? <ArtemR /> : null}
			{buttonSelectors.MR ? (
				<ArtemMr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SR ? (
				<ArtemSr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{buttonSelectors.SSR ? (
				<ArtemSsr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
		</div>
	);
}

export default ArtemPage;
