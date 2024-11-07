// src/components/Table.js
import React from 'react';

const Table = ({ table }) => {
  const handleAddOrder = () => {
    console.log(`إضافة طلب للطاولة رقم ${table.number}`);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <p>رقم الطاولة: {table.number}</p>
      <p>الحالة: {table.status}</p>
      <button onClick={handleAddOrder}>إضافة طلب</button>
    </div>
  );
};

export default Table;
