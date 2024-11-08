// src/components/OrderItem.js
import React from 'react';

const OrderItem = ({ item, onEdit, onRemove }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <p>العنصر: {item.name}</p>
      <p>السعر: {item.price} دولار</p>
      <button onClick={() => onEdit({ ...item, price: item.price + 1 })}>
        تعديل السعر
      </button>
      <button onClick={onRemove}>حذف العنصر</button>
    </div>
  );
};

export default OrderItem;
