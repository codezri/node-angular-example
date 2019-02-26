let express = require('express');
let authController = require('../../controllers/authController');
let router = express.Router();


router.post('/api/v1/login', authController.login);
router.post('/api/v1/me', authController.me);


module.exports = router;