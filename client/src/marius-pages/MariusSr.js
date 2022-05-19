import { useState, useEffect } from 'react';
import FullScreenView from '../FullScreenView';
import getCards from '../components/GetCards';
import axios from 'axios';

function MariusSr({ setVideoSrc, setHeader }) {
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
		setHeader(card.title);
	};

	useEffect(() => {
		getCards('marius', 'sr').then((data) => {
			// set response as card data
			setCards(data);
		});
	}, []);

	return (
		<div>
			{showFullScreen ? (
				<FullScreenView
					className={`marius-buttons`}
					card={fullCard}
					onClick={() => fullScreen()}
					setShowFullScreen={setShowFullScreen}
				/>
			) : null}
			<div className="sr-cards">
				{cards.map((card) => {
					return (
						<div
							className="card"
							key={card._id}
							onClick={() => selectCard(card)}
							onDoubleClick={() => fullScreen(card)}
						>
							<h3 className="marius-card-title">{card.title}</h3>
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

export default MariusSr;
