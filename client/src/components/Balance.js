import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts =
    transactions && Array.isArray(transactions)
      ? transactions.map((transaction) => transaction.amount || 0)
      : [];
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Balance</h4>
      <h1>€{numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
