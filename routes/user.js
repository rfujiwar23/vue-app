// routes/user.js
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/session', userController.session);

module.exports = router;
