const Item = require('../models/item');

module.exports.list = (req, res) => {
    
}


module.exports.insert = (req, res) => {
    let item = new Item({
        name: 'Apple',
        price: 60
    });
    item.save();
    res.json(item);
}


