const Card = require('../models/card')

const getArtemCards = async (req, res) => {
    const cards = await Card.find({
        character: "artem"
    })
    res.status(200).json(cards)
}

module.exports = { getArtemCards }