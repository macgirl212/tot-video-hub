const Card = require('../models/card')

const getVynCards = async (req, res) => {
    const cards = await Card.find({
        character: "vyn"
    })
    res.status(200).json(cards)
}

module.exports = { getVynCards }