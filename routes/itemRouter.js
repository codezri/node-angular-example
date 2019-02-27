let express = require('express');
let router = express.Router();
let itemController = require('../controllers/itemController');

router.post('/api/v1/items', itemController.insert);


module.exports = router;