import { useState, useEffect } from 'react';
import FullScreenView from '../FullScreenView';
import getCards from '../components/GetCards';
import ytSearchLink from '../components/YTSearchLink';
import axios from 'axios';

function VynSsr({ setVideoSrc, setYouTubeSearch, setChosenCard }) {
	let [showFullScreen, setShowFullScreen] = useState(false);
	let [fullCard, setFullCard] = useState();
	const [cards, setCards] = useState([]);

	const fullScreen = async (card) => {
		// get card json data
		await axios
			.get(`http://localhost:3001/api/v1/${card._id}`, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((data) => {
				// store json data in cards state
				setFullCard(data);
				setShowFullScreen((showFullScreen = !showFullScreen));
			});
	};
	const selectCard = (card) => {
		// set video embed link and header
		setChosenCard(card);
		setVideoSrc(card.youTubeSrc);
		setYouTubeSearch(ytSearchLink(card.title));
	};

	const selectCardCall = (card) => {
		// set video embed link and header
		setChosenCard(card);
		setVideoSrc(card.youTubeSrc2);
		setYouTubeSearch(ytSearchLink(card.title));
	};

	useEffect(() => {
		getCards('vyn', 'ssr').then((data) => {
			// set response as card data
			setCards(data);
		});
	}, []);

	return (
		<div>
			{showFullScreen ? (
				<FullScreenView
					className={`vyn-buttons`}
					card={fullCard}
					onClick={() => fullScreen()}
					setShowFullScreen={setShowFullScreen}
				/>
			) : null}
			<div className="ssr-cards">
				{cards.map((card) => {
					return (
						<div className="card" key={card._id}>
							<h3 className="vyn-card-title">{card.title}</h3>
							<img
								className="card-img"
								src={`${card.previewPicture}`}
								alt={`${card.previewPicture}`}
								onClick={() => selectCard(card)}
								onDoubleClick={() => fullScreen(card)}
							/>
							<div
								className="vyn-call-line"
								onClick={() => selectCardCall(card)}
							>
								<h4>Call</h4>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VynSsr;
