// src/components/OrderScreen.js
import React, { useState } from 'react';
import OrderItem from './OrderItem';
import OrderSummary from './OrderSummary';

const OrderScreen1 = () => {
  const [orderItems, setOrderItems] = useState([]);

  // إضافة عنصر جديد للطلب
  const handleAddItem = (item) => {
    setOrderItems([...orderItems, item]);
  };

  // تعديل عنصر في الطلب
  const handleEditItem = (index, newItem) => {
    const updatedItems = [...orderItems];
    updatedItems[index] = newItem;
    setOrderItems(updatedItems);
  };

  // حذف عنصر من الطلب
  const handleRemoveItem = (index) => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
  };

  return (
    <div>
      <h1>إدارة الطلبات</h1>
      <div>
        {orderItems.map((item, index) => (
          <OrderItem
            key={index}
            item={item}
            onEdit={(newItem) => handleEditItem(index, newItem)}
            onRemove={() => handleRemoveItem(index)}
          />
        ))}
      </div>
      <button onClick={() => handleAddItem({ name: 'عنصر جديد', price: 20 })}>
        إضافة عنصر
      </button>
      <OrderSummary items={orderItems} />
    </div>
  );
};

export default OrderScreen1;
