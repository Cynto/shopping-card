import React, { useEffect } from 'react';
import currency from 'currency.js';
import { useSelector, useDispatch } from 'react-redux';
import { setTotal } from '../actions/index';

function TotalAmount(props: any) {
  const { basketArray } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const totalAmount = useSelector((state: any) => state.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    if (basketArray.length > 0) {
      const total = basketArray.reduce(
        (acc: number, curr: any) =>
          currency(acc).value + currency(curr.price).value * curr.quantity,
        0,
      );

      dispatch(setTotal(total));
    } else dispatch(setTotal(0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketArray]);
  return (
    <div className="total-amount-container">
      <div className="top-amount-container">
        <h2 className="total">TOTAL: {formatter.format(totalAmount)}</h2>
      </div>
    </div>
  );
}

export default TotalAmount;
