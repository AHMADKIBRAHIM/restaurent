// src/components/PaymentMethod.js
import React from 'react';

const PaymentMethod = ({ setPaymentMethod }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h2>اختر طريقة الدفع</h2>
      <label>
        <input
          type="radio"
          name="payment"
          value="cash"
          onChange={() => setPaymentMethod('cash')}
        />
        نقدي
      </label>
      <label style={{ marginLeft: '10px' }}>
        <input
          type="radio"
          name="payment"
          value="card"
          onChange={() => setPaymentMethod('card')}
        />
        بطاقة
      </label>
    </div>
  );
};

export default PaymentMethod;
