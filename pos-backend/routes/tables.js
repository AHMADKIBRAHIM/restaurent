// routes/tables.js
const express = require('express');
const router = express.Router();
const Table = require('../models/Table'); // استيراد نموذج الطاولة

// GET /api/tables - لجلب جميع الطاولات وحالاتها
router.get('/', async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tables' });
  }
});

// POST /api/tables/:id/order - لإضافة طلب جديد لطاولة معينة
router.post('/:id/order', async (req, res) => {
  const { id } = req.params;
  const orderDetails = req.body;

  try {
    const table = await Table.findById(id);
    if (!table) return res.status(404).json({ error: 'Table not found' });

    // هنا يمكن إضافة منطق إنشاء الطلب للطاولة
    // على سبيل المثال، يمكنك تحديث حالة الطاولة وإضافة الطلب

    table.currentOrder = orderDetails; // تعديل حالة الطلب للطاولة
    await table.save();

    res.status(200).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add order' });
  }
});

module.exports = router;
