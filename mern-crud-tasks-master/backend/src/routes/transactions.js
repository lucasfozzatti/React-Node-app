const express = require('express');
const router = express.Router();
const pool = require('../database');
const authController = require('../controllers/transaction')


router.post('/save_transactions')

router.get('/transactions/:id', authController.movement)

module.exports = router;