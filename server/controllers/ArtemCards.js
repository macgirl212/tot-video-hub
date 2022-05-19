const Card = require('../models/card');

const getArtemCards = async (req, res) => {
	const { type } = req.query;
	const queryObject = { character: 'artem' };
	if (type) {
		queryObject.type = type;
	}
	const cards = await Card.find(queryObject).sort({ title: 1 });
	res.status(200).json(cards);
};

module.exports = { getArtemCards };
