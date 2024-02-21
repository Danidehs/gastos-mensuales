import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false); // Default to expense

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: isIncome ? amount : -amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Agregar transaccion</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Concepto</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Ingresa un concepto...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Monto <br />
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Ingresa un monto...'
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50px',
          }}
          className='react-switch'
        >
          <label className='switch' onChange={() => setIsIncome(!isIncome)}>
            <input type='checkbox' />
            <span className='slider'>{isIncome}</span>
          </label>
        </div>
        <button className='custom-btn'>Agregar</button>
      </form>
    </>
  );
};
