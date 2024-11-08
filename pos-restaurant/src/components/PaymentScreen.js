// src/components/PaymentScreen.js
import React, { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import Invoice from './Invoice';

const PaymentScreen = ({ orderItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  // دالة إتمام عملية الدفع
  const handlePayment = () => {
    if (!paymentMethod) {
      alert('الرجاء اختيار طريقة الدفع');
      return;
    }

    setIsPaid(true);
    // يمكن هنا إرسال الفاتورة إلى الخادم للحفظ
    console.log('تمت عملية الدفع وتم حفظ الفاتورة.');
  };

  return (
    <div>
      <h1>شاشة الدفع</h1>
      
      {/* اختيار طريقة الدفع */}
      <PaymentMethod setPaymentMethod={setPaymentMethod} />
      
      {/* عرض الفاتورة */}
      <Invoice items={orderItems} paymentMethod={paymentMethod} isPaid={isPaid} />
      
      {/* زر إتمام الدفع */}
      <button onClick={handlePayment} disabled={isPaid}>
        {isPaid ? 'تم الدفع' : 'إتمام الدفع'}
      </button>
    </div>
  );
};

export default PaymentScreen;
