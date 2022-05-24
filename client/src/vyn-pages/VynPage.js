import vynLogo from '../images/Vyn-Logo.png';
import VynR from './VynR';
import VynSr from './VynSr';
import VynMr from './VynMr';
import VynSsr from './VynSsr';
import initialCardsState from '../store/states/initialCardsState';
import cardReducer from '../store/reducers/CardReducer';
import SSRButton from '../components/buttons/SSRButton';
import SRButton from '../components/buttons/SRButton';
import MRButton from '../components/buttons/MRButton';
import RButton from '../components/buttons/RButton';
import VideoContainer from '../components/VideoContainer';
import AltLinkButton from '../components/AltLinkButton';
import { useState, useReducer, useContext, useEffect } from 'react';
import { ReactReduxContext } from 'react-redux';
import { Link } from 'react-router-dom';

function VynPage() {
	// redux
	const { store } = useContext(ReactReduxContext);

	// states
	const [videoSrc, setVideoSrc] = useState(
		'https://www.youtube.com/embed/qn4zDDSxP24'
	);
	const [youTubeSearch, setYouTubeSearch] = useState(
		'https://www.youtube.com/results?search_query=Tears+of+Themis+Vyn+Richter'
	);
	const [chosenCard, setChosenCard] = useState();

	// local reducer
	const [state, dispatch] = useReducer(cardReducer, initialCardsState);

	// r cards click handler
	const findR = () => {
		dispatch({ type: 'R' });
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
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{state.MR ? (
				<VynMr
					setVideoSrc={setVideoSrc}
					setYouTubeSearch={setYouTubeSearch}
					setChosenCard={setChosenCard}
				/>
			) : null}
			{state.SSR ? (
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
