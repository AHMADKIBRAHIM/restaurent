// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');

const dotenv = require('dotenv');
const tableRoutes = require('./routes/tables'); // استيراد مسار الطاولات

dotenv.config();
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors()); // السماح بالطلبات من أي مصدر، يمكنك تخصيصه للسماح لمصدر معين فقط


// الاتصال بقاعدة البيانات MongoDB
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// تفعيل مسار الطاولات
app.use('/api/tables', tableRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orders', paymentRoutes); // يتم الوصول إلى الدفع عبر نفس مسار الطلبات


// نقطة النهاية لجلب جميع الطاولات
app.get('/api/tables', async (req, res) => {
  try {
    const tables = await Table.find();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tables' });
  }
});

// نقطة النهاية لإضافة طلب لطاولة معينة
app.post('/api/tables/:id/order', async (req, res) => {
  const { id } = req.params;
  const orderDetails = req.body;

  try {
    const table = await Table.findById(id);
    if (!table) return res.status(404).json({ error: 'Table not found' });

    // منطق إضافة الطلب هنا
    res.status(200).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add order' });
  }
});

// نقطة النهاية لجلب جميع الطلبات
app.get('/api/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve orders' });
  }
});

// نقطة النهاية لتعديل الطلب
app.put('/api/orders/:id', async (req, res) => {
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


// نقطة النهاية لإتمام الدفع وإنشاء الفاتورة
app.post('/api/orders/:id/payment', async (req, res) => {
  const { id } = req.params;
  const paymentDetails = req.body;

  try {
    // منطق إتمام الدفع وإنشاء الفاتورة هنا
    res.status(200).json({ message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process payment' });
  }
});

// إعداد المنفذ
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
