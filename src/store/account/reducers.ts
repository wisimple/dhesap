import {
  AccountActionTypes,
  AccountState,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNTS_SUCCESS,
  GET_ONE_ACCOUNT_SUCCESS,
  SET_ACCOUNT_LOADING,
  SET_ACCOUNT_OPERATION_LOADING,
  UPDATE_ACCOUNT_SUCCESS,
} from './types';

const initialState: AccountState = {
  accounts: [],
  transactions: [],
};

export function accountReducer(state = initialState, action: AccountActionTypes): AccountState {
  switch (action.type) {
    case SET_ACCOUNT_LOADING:
      return { ...state, loading: action.payload.loading };

    case SET_ACCOUNT_OPERATION_LOADING:
      return { ...state, opLoading: action.payload.opLoading };

    case GET_ALL_ACCOUNTS_SUCCESS:
      return { ...state, accounts: action.payload.accounts, loading: false };

    case CREATE_ACCOUNT_SUCCESS:
      return { ...state, accounts: [action.payload.account, ...state.accounts], opLoading: false };

    case GET_ONE_ACCOUNT_SUCCESS: {
      const { account, transactions } = action.payload;
      return { ...state, account, transactions, loading: false };
    }

    case UPDATE_ACCOUNT_SUCCESS:
      const { account } = action.payload;
      return {
        ...state,
        account,
        accounts: state.accounts.map((c) => (c._id === account._id ? account : c)),
        opLoading: false,
      };

    case DELETE_ACCOUNT_SUCCESS: {
      const { account } = action.payload;
      return { ...state, accounts: state.accounts.filter((c) => c._id !== account._id), opLoading: false };
    }

    default:
      return state;
  }
}
