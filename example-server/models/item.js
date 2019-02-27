const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name : String,
    price : Number
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;