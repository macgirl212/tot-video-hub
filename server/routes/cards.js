const express = require('express');
const router = express.Router();

const { getArtemCards } = require('../controllers/ArtemCards');
const { getLukeCards } = require('../controllers/LukeCards');
const { getMariusCards } = require('../controllers/MariusCards');
const { getVynCards } = require('../controllers/VynCards');
const { getIndividualCard } = require('../controllers/IndividualCard');

router.route('/artem').get(getArtemCards);
router.route('/luke').get(getLukeCards);
router.route('/marius').get(getMariusCards);
router.route('/vyn').get(getVynCards);
router.route('/:id').get(getIndividualCard);

module.exports = router;
