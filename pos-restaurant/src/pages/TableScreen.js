// src/pages/TableScreen.js
import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import '../styles/TableScreen.css'; // استيراد ملف CSS

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
    console.log(tables);
  }, []);

  return (
    <div className="container">
      <h1>قائمة الطاولات</h1>
      <div className="tables-grid">
        {tables.map((table) => (
          <div key={table.id} className="table-card">
            <p>رقم الطاولة: {table.number}</p>
            <p>الحالة: {table.status}</p>
            <button className="button" onClick={() => handleAddOrder(table.id)}>إضافة طلب</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableScreen;
