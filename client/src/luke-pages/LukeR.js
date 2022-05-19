import { useState, useEffect } from 'react';
import getCards from '../components/GetCards';

function LukeR() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		getCards('luke', 'r').then((data) => {
			// set response as card data
			setCards(data);
		});
	}, []);

	return (
		<div className="r-cards">
			{cards.map((card) => {
				return (
					<div className="card r-bumper" key={card._id}>
						<h3 className="luke-card-title">{card.title}</h3>
						<img
							className="card-img"
							src={`${card.previewPicture}`}
							alt={`${card.title}`}
						></img>
					</div>
				);
			})}
		</div>
	);
}

export default LukeR;
