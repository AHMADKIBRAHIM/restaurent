// src/components/Invoice.js
import React from 'react';

const Invoice = ({ items, paymentMethod, isPaid }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
      <h2>الفاتورة</h2>
      {items.map((item, index) => (
        <p key={index}>
          {item.name}: {item.price} دولار
        </p>
      ))}
      <p>إجمالي السعر: {total} دولار</p>
      <p>طريقة الدفع: {paymentMethod || 'لم يتم اختيارها بعد'}</p>
      {isPaid && <p>تم الدفع بنجاح</p>}
    </div>
  );
};

export default Invoice;
