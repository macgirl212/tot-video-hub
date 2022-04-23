const Card = require('../models/card')

const getLukeCards = async (req, res) => {
    const { type } = req.query
    const queryObject = { 'character': 'luke' }
    if (type) {
        queryObject.type = type
    }
    const cards = await Card.find(queryObject)
    res.status(200).json(cards)
}

module.exports = { getLukeCards }