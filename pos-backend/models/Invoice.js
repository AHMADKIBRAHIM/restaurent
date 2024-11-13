// models/Invoice.js
const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true }, // الطلب المرتبط بالفاتورة
  paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' }, // حالة الدفع
  paymentMethod: { type: String, enum: ['cash', 'credit card', 'debit card'], required: true }, // طريقة الدفع
  totalAmount: { type: Number, required: true }, // المبلغ الكلي للفاتورة
  issuedAt: { type: Date, default: Date.now } // تاريخ إصدار الفاتورة
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;
