// src/pages/OrderScreen.js
import React, { useState } from 'react';

const OrderScreen = () => {
  const [orderItems, setOrderItems] = useState([]);

  // إضافة عنصر جديد للطلب
  const handleAddItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  // حذف عنصر من الطلب
  const handleRemoveItem = (index) => {
    const newItems = [...orderItems];
    newItems.splice(index, 1);
    setOrderItems(newItems);
  };

  return (
    <div>
      <h1>إدارة الطلبات</h1>
      <div>
        {orderItems.map((item, index) => (
          <div key={index}>
            <p>الطلب: {item.name}</p>
            <p>السعر: {item.price}</p>
            <button onClick={() => handleRemoveItem(index)}>حذف</button>
          </div>
        ))}
      </div>
      <button onClick={() => handleAddItem({ name: 'عنصر جديد', price: 20 })}>إضافة عنصر</button>
    </div>
  );
};

export default OrderScreen;
