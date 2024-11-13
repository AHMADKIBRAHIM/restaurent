// routes/payments.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // استيراد نموذج الطلب

// POST /api/orders/:id/payment - إتمام الدفع وإنشاء الفاتورة
router.post('/:id/payment', async (req, res) => {
  const { id } = req.params;
  const paymentDetails = req.body;

  try {
    // منطق إتمام الدفع وإنشاء الفاتورة هنا
    res.status(200).json({ message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

module.exports = router;
