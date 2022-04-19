const express = require('express')
const router = express.Router()

const { getAllRCards } = require('../controllers/rCards')

router.route('/r').get(getAllRCards)

module.exports = router