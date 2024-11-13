// models/Table.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: { type: Number, required: true, unique: true }, // رقم الطاولة
  seats: { type: Number, required: true }, // عدد المقاعد
  status: { type: String, enum: ['available', 'occupied', 'reserved'], default: 'available' }, // حالة الطاولة
  currentOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', default: null } // الطلب الحالي للطاولة
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;
