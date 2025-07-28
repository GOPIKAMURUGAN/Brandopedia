const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  qty: Number
});

module.exports = mongoose.model('CartItem', cartItemSchema);
