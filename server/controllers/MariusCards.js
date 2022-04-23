const Card = require('../models/card')

const getMariusCards = async (req, res) => {
    const cards = await Card.find({
        character: "marius"
    })
    res.status(200).json(cards)
}

module.exports = { getMariusCards }