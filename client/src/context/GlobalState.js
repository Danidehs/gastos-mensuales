import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
// Initial state

const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  async function getTransactions() {
    console.log('get working');
    try {
      const res = await axios.get(
        'https://gastos-mensuales-eosin.vercel.app/api/getTransactions'
      );

      dispatch({
        type: 'GET_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    console.log('delete working');
    try {
      await axios.delete(
        `https://gastos-mensuales-eosin.vercel.app/api/deleteTransaction?id=${id}`
      );

      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    console.log('add working');
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `https://gastos-mensuales-eosin.vercel.app/api/addTransaction`,
        transaction,
        config
      );

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
