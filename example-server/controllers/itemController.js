const Item = require('../models/item');

/**
 * @access - public
 */
module.exports.list = (req, res) => {

    Item.find({}, (error, items) => {
        res.json({
            items: items
        });
    });
    
}

/**
 * @access - auth user
 */
module.exports.insert = (req, res) => {

    req.checkBody('name', 'Name should not be empty').not().isEmpty();
    req.checkBody('price', 'Price should be a numberic value').isNumeric();

    const errors = req.validationErrors();
    if(errors) return res.status(402).json({
        errors : errors
    });

    let item = new Item({
        name: req.body.name,
        price: req.body.price
    });

    item.save();
    res.json(item);
    
}


