import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableScreen from './pages/TableScreen';
import OrderScreen from './pages/OrderScreen';
import PaymentScreen from './pages/PaymentScreen';
import TableScreen1 from './components/TableScreen';
import Header from './components/Header';
import OrderScreen1 from './components/OrderScreen';


function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
