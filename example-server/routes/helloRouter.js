let express = require('express');
let router = express.Router();
let helloController = require('../controllers/helloController');
let helloWorldController = require('../controllers/helloWorldController');

router.get('/api/v1/hello', helloController);

router.post('/api/v1/hello/world', helloWorldController);


module.exports = router;