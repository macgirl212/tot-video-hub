const Card = require('../models/card')

const getLukeCards = async (req, res) => {
    const cards = await Card.find({
        character: "luke"
    })
    res.status(200).json(cards)
}

module.exports = { getLukeCards }