import {
  TransactionActionTypes,
  TransactionState,
  GET_PAGINATED_TRANSACTIONS,
  CREATE_TRANSACTION,
  GET_ONE_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  SET_TRANSACTION_OPERATION_LOADING,
  SET_TRANSACTION_LOADING,
  SET_TRANSACTIONS_ACTIVE_PAGE,
  UPDATE_TRANSACTION_ACCOUNTS,
  UPDATE_TRANSACTION_CATEGORIES,
} from './types';

const initialState: TransactionState = {
  transactions: [],
  activePage: 1,
  totalPages: 0,
};

export function transactionReducer(state = initialState, action: TransactionActionTypes): TransactionState {
  switch (action.type) {
    case SET_TRANSACTION_LOADING:
      return { ...state, loading: true };

    case SET_TRANSACTION_OPERATION_LOADING:
      return { ...state, opLoading: true };

    case SET_TRANSACTIONS_ACTIVE_PAGE: {
      const { activePage } = action.payload;
      return { ...state, activePage };
    }

    case GET_PAGINATED_TRANSACTIONS: {
      const { transactions, totalPages, activePage } = action.payload;
      return { ...state, totalPages, transactions, activePage, loading: false };
    }

    case CREATE_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload.transaction, ...state.transactions],
        opLoading: false,
      };

    case GET_ONE_TRANSACTION:
      return { ...state, transaction: action.payload.transaction, loading: false };

    case UPDATE_TRANSACTION: {
      const { transaction } = action.payload;
      return {
        ...state,
        transactions: state.transactions.map((t) => (t._id === transaction._id ? transaction : t)),
        opLoading: false,
      };
    }

    case DELETE_TRANSACTION: {
      const { transaction } = action.payload;
      return { ...state, transactions: state.transactions.filter((t) => t._id !== transaction._id) };
    }

    case UPDATE_TRANSACTION_ACCOUNTS: {
      const { account } = action.payload;
      return {
        ...state,
        transactions: state.transactions.map((t) => {
          if (t.from._id === account._id) {
            return { ...t, from: account };
          } else if (t.to?._id === account._id) {
            return { ...t, to: account };
          } else {
            return t;
          }
        }),
      };
    }

    case UPDATE_TRANSACTION_CATEGORIES: {
      const { category } = action.payload;
      return {
        ...state,
        transactions: state.transactions.map((t) => {
          const newCategories = t.ctgrs?.map((cat) => {
            if (cat._id === category._id) {
              return category;
            }
            return cat;
          });
          return { ...t, ctgrs: newCategories };
        }),
      };
    }
    default:
      return state;
  }
}
