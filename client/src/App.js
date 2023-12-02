import './App.css';
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <div className='row gx-5'>
          <div className='col-12 col-lg-2 order-lg-3'>
            <Balance />
          </div>
          <div className='col-12 col-lg-6 order-lg-2'>
            <TransactionList />
            <AddTransaction />
          </div>
          <div className='col-12 col-lg-4 order-lg-1'>
            <IncomeExpenses />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
