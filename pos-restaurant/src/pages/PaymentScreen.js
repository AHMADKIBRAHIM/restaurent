// src/pages/PaymentScreen.js
import React, { useState } from 'react';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    if (paymentMethod === '') {
      alert('الرجاء اختيار طريقة الدفع');
      return;
    }
    alert('تم الدفع بنجاح');
  };

  return (
    <div>
      <h1>الدفع</h1>
      <p>المجموع: 100 دولار</p> {/* Hard-coded example total */}
      <div>
        <label>
          <input
            type="radio"
            name="payment"
            value="cash"
            onChange={() => setPaymentMethod('cash')}
          />
          نقدي
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={() => setPaymentMethod('card')}
          />
          بطاقة
        </label>
      </div>
      <button onClick={handlePayment}>إتمام الدفع</button>
    </div>
  );
};

export default PaymentScreen;
