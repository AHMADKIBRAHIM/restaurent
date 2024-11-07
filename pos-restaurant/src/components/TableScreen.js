// src/components/TableScreen.js
import React, { useState, useEffect } from 'react';
import Table from './Table';

const TableScreen1 = () => {
  const [tables, setTables] = useState([
    { id: 1, number: 1, status: 'فارغة' },
    { id: 2, number: 2, status: 'مشغولة' },
    { id: 3, number: 3, status: 'محجوزة' }
  ]);

  // تعليق جلب البيانات مؤقتاً
  // const fetchTables = async () => {
  //   try {
  //     const response = await fetch('/api/tables'); 
  //     const data = await response.json();
  //     setTables(data);
  //   } catch (error) {
  //     console.error('خطأ في جلب بيانات الطاولات:', error);
  //   }
  // };

  useEffect(() => {
    // fetchTables(); // علّق هذا السطر مؤقتًا
  }, []);

  return (
    <div>
      <h1>قائمة الطاولات</h1>
      <div>
        {tables.map((table) => (
          <Table key={table.id} table={table} />
        ))}
      </div>
    </div>
  );
};

export default TableScreen1;
