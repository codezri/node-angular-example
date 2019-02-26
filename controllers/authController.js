
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
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        let token = req.headers.authorization.split(' ')[1];
        console.log(token);
        jwt.verify(token, config.secret, (err, user) => {
            if(err)
                return res.send(403);
            res.json(user);
        });
    } else {
        res.send(403);
    }

    
    
}