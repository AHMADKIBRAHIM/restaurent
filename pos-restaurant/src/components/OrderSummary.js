// src/components/OrderSummary.js
import React from 'react';

const OrderSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h2>ملخص الطلب</h2>
      <p>إجمالي السعر: {total} دولار</p>
    </div>
  );
};

export default OrderSummary;
