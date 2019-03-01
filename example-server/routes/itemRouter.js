const express = require('express');
const jwt = require('express-jwt');
const router = express.Router();
const config = require('../config');
const itemController = require('../controllers/itemController');

router.post('/api/v1/items', jwt({
    secret: config.secret
}), itemController.insert);

router.get('/api/v1/items', jwt({
    secret: config.secret
}), itemController.list);

router.delete('/api/v1/items/:_id', jwt({
    secret: config.secret
}), itemController.delete);

module.exports = router;