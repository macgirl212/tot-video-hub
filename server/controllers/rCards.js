const Card = require('../models/card')

const getAllRCards = async (req, res) => {
    const cards = await Card.find()
    res.status(200).json(cards)
}

module.exports = { getAllRCards }