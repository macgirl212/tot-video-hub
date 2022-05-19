const Card = require('../models/card');

const getVynCards = async (req, res) => {
	const { type } = req.query;
	const queryObject = { character: 'vyn' };
	if (type) {
		queryObject.type = type;
	}
	const cards = await Card.find(queryObject).sort({ title: 1 });
	res.status(200).json(cards);
};

module.exports = { getVynCards };
