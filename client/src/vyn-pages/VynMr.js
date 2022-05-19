import { useState, useEffect } from 'react';
import FullScreenView from '../FullScreenView';
import getCards from '../components/GetCards';
import ytSearchLink from '../components/YTSearchLink';
import axios from 'axios';

function VynMr({ setVideoSrc, setYouTubeSearch, setHeader }) {
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
		setVideoSrc(card.youTubeSrc);
		setYouTubeSearch(ytSearchLink(card.title));
		setHeader(card.title);
	};

	useEffect(() => {
		getCards('vyn', 'mr').then((data) => {
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
			<div className="mr-cards">
				{cards.map((card) => {
					return (
						<div
							className="card"
							key={card._id}
							onClick={() => selectCard(card)}
							onDoubleClick={() => fullScreen(card)}
						>
							<h3 className="vyn-card-title">{card.title}</h3>
							<img
								className="card-img"
								src={`${card.previewPicture}`}
								alt={`${card.previewPicture}`}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default VynMr;
