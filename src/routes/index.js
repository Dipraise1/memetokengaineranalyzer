const express = require('express');
const { getWalletGains } = require('../controllers/solanaController');

const router = express.Router();

// Define a route for fetching wallet gains/losses
router.get('/wallet/:address', getWalletGains);

module.exports = router;
