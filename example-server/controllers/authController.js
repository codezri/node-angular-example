
const jwt = require('jsonwebtoken');
const config = require('../config');

/**
 * @access - public 
 */
module.exports.login = (req, res) => {

    let dummyUser = {
        username : 'Test',
        id : '1234'
    };
    
    req.checkBody('username', 'username should not be empty').not().isEmpty();
    req.checkBody('password', 'password should not be empty').not().isEmpty();

    const errors = req.validationErrors();
    if(errors) return res.status(402).json({
        errors : errors
    });

    if(req.body.username != 'test' || req.body.password != 'test') return res.status(401).json({
        errors : [{
            msg : 'Invalid username or password'
        }]
    });

    let token = jwt.sign(dummyUser, config.secret, {
        expiresIn : config.expiresIn
    });
    res.json({
        auth : true,
        token : token
    });
}

/**
 * @access - auth user 
 */
module.exports.me = (req, res) => {
    res.json(req.user);
}