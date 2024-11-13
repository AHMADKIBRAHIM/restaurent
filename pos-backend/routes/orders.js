// routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // استيراد نموذج الطلب

// GET /api/orders - لجلب جميع الطلبات
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});

// PUT /api/orders/:id - لتعديل الطلب
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedOrder) return res.status(404).json({ error: 'Order not found' });

    res.status(200).json({ message: 'Order updated successfully', updatedOrder });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
});

module.exports = router;
