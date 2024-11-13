// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true }, // الطاولة المرتبطة بالطلب
  items: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }, // العنصر المطلوب
      quantity: { type: Number, required: true } // الكمية المطلوبة
    }
  ],
  totalAmount: { type: Number, required: true }, // المجموع الكلي للطلب
  status: { type: String, enum: ['pending', 'served', 'completed'], default: 'pending' }, // حالة الطلب
  createdAt: { type: Date, default: Date.now } // تاريخ إنشاء الطلب
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
