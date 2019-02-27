
const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.login = (req, res) => {
    let dummyUser = {
        username : 'Test',
        id : '12'
    };
    let token = jwt.sign(dummyUser, config.secret, {
        expiresIn : config.expiresIn
    });
    res.json({
        auth : true,
        token : token
    });
}


module.exports.me = (req, res) => {
    res.json(req.user);
}