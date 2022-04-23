const express = require('express')
const router = express.Router()

const { getArtemCards } = require('../controllers/ArtemCards')
const { getLukeCards } = require('../controllers/LukeCards')
const { getMariusCards } = require('../controllers/MariusCards')
const { getVynCards } = require('../controllers/VynCards')

router.route('/artem').get(getArtemCards)
router.route('/luke').get(getLukeCards)
router.route('/marius').get(getMariusCards)
router.route('/vyn').get(getVynCards)

module.exports = router