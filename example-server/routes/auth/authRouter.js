let express = require('express');
let jwt = require('express-jwt');
let authController = require('../../controllers/authController');
let router = express.Router();
const config = require('../../config');


router.post('/api/v1/login', authController.login);
router.post('/api/v1/me', jwt({
    secret : config.secret
}) ,authController.me);


module.exports = router;