// src/pages/TableScreen.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';

const TableScreen = () => {
  const [tables, setTables] = useState([]);

  const fetchTables = async () => {
    try {
      
      const response = await axios.get('/tables');
      setTables(response.data);
    } catch (error) {
      console.error('خطأ في جلب بيانات الطاولات:', error);
    }
  };

  // Define the function
  const handleAddOrder = (tableId) => {
    console.log(`Adding order for table ${tableId}`);
    // Add logic for handling order creation
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <div>
      <h1>قائمة الطاولات</h1>
      <div>
        {tables.map((table) => (
          <div key={table.id}>
            <p>رقم الطاولة: {table.number}</p>
            <p>الحالة: {table.status}</p>
            <button onClick={() => handleAddOrder(table.id)}>إضافة طلب</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableScreen;
