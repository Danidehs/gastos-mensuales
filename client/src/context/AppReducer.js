// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTION':
      return {
        ...state,
        loading: false,
        transactions: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions], //Gets all values from the array "transactions" and assigns it here
      };
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
