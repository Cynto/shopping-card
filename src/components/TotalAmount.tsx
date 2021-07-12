import React, { useState, useEffect } from 'react';
import currency from 'currency.js';

function TotalAmount(props: any) {
  const { basketArray } = props;
  const [totalAmount, setTotalAmount] = useState(
    basketArray.reduce(
      (acc: number, curr: any) => acc + curr.price * curr.quantity,
      0,
    ),
  );

  useEffect(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    if (basketArray.length > 0) {
      setTotalAmount(
        formatter.format(
          Math.round(
            basketArray.reduce(
              (acc: number, curr: any) =>
                currency(acc).value +
                currency(curr.price).value * curr.quantity,
              0,
            ) * 100,
          ) / 100,
        ),
      );
    } else setTotalAmount(formatter.format(0));
    
  }, [basketArray]);
  return (
    <div className="total-amount-container">
      <div className="top-amount-container">
        <h2 className="total">TOTAL: {totalAmount}</h2>
      </div>
    </div>
  );
}

export default TotalAmount;
