import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableScreen from './pages/TableScreen';
import OrderScreen from './pages/OrderScreen';
import PaymentScreen from './pages/PaymentScreen';
import TableScreen1 from './components/TableScreen';
import Header from './components/Header';
import OrderScreen1 from './components/OrderScreen';
import PaymentScreen1 from './components/PaymentScreen';


function App() {
  const sampleOrderItems = [
    { name: 'طبق 1', price: 10 },
    { name: 'مشروب 1', price: 5 },
  ];


  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tables" />} />
        <Route path="/tables" element={<TableScreen />} />
        <Route path="/orders" element={<OrderScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/TableScreen1" element={<TableScreen1 />} />
        <Route path="/OrderScreen1" element={<OrderScreen1 />} />
        <Route path="/PaymentScreen1" element={<PaymentScreen1 orderItems={sampleOrderItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
