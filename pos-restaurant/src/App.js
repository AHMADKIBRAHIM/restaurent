import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableScreen from './pages/TableScreen';
import OrderScreen from './pages/OrderScreen';
import PaymentScreen from './pages/PaymentScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/tables" />} />
        <Route path="/tables" element={<TableScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
