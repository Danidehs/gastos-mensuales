import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts =
    transactions && Array.isArray(transactions)
      ? transactions.map((transaction) => transaction.amount || 0)
      : [];
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Ingresos</h4>
        <p className='money plus'>+€{numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className='money minus'>-€{numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};
