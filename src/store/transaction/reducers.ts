import {
  TransactionActionTypes,
  TransactionState,
  GET_PAGINATED_TRANSACTIONS,
  CREATE_TRANSACTION,
  GET_ONE_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
} from './types';

const initialState: TransactionState = {
  transactions: [],
  activePage: 1,
  totalPages: 0,
};

export function transactionReducer(state = initialState, action: TransactionActionTypes): TransactionState {
  switch (action.type) {
    case GET_PAGINATED_TRANSACTIONS: {
      const { transactions, totalPages, activePage } = action.payload;
      return { ...state, totalPages, transactions, activePage };
    }
    case CREATE_TRANSACTION:
      return { ...state, transactions: [action.payload.transaction, ...state.transactions] };

    case GET_ONE_TRANSACTION:
      return { ...state, transaction: action.payload.transaction };

    case UPDATE_TRANSACTION: {
      const { transaction } = action.payload;
      return {
        ...state,
        transactions: state.transactions.map((t) => (t._id === transaction._id ? transaction : t)),
      };
    }

    case DELETE_TRANSACTION: {
      const { transaction } = action.payload;
      return { ...state, transactions: state.transactions.filter((t) => t._id !== transaction._id) };
    }
    default:
      return state;
  }
}
