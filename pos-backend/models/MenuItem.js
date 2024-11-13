// models/MenuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true }, // اسم العنصر
  category: { type: String, required: true }, // فئة العنصر (طعام، شراب، إلخ)
  price: { type: Number, required: true }, // سعر العنصر
  description: { type: String }, // وصف العنصر
  availability: { type: Boolean, default: true } // توفر العنصر
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
