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
    try {
      const res = await axios.get('/api/getTransactions');
      console.log('global get working ');
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
    try {
      console.log('global delete working');
      await axios.delete(`/api/deleteTransaction?id=${id}`);

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
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      console.log('global add working');
      const res = await axios.post('/api/addTransaction', transaction, config);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data.data,
      });
    } catch (err) {
      console.error('Axios error:', err);
      console.error('Response object:', err.response);
      if (err.response && err.response.data && err.response.data.error) {
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: err.response.data.error,
        });
      } else {
        // Handle cases where err.response or err.response.data is undefined
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: 'An error occurred',
        });
      }
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
