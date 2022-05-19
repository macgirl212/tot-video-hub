const Card = require('../models/card');

const getIndividualCard = async (req, res) => {
	const { id } = req.params;
	const card = await Card.findById(id);
	res.status(200).json(card);
};

module.exports = { getIndividualCard };
