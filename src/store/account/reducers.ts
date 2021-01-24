import {
  AccountActionTypes,
  AccountState,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNTS_SUCCESS,
  GET_ONE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_SUCCESS,
} from './types';

const initialState: AccountState = {
  accounts: [],
};

export function accountReducer(state = initialState, action: AccountActionTypes): AccountState {
  switch (action.type) {
    case GET_ALL_ACCOUNTS_SUCCESS:
      return { ...state, accounts: action.payload.accounts };
    case CREATE_ACCOUNT_SUCCESS:
      return { ...state, accounts: [action.payload.account, ...state.accounts] };
    case GET_ONE_ACCOUNT_SUCCESS:
      return { ...state, account: action.payload.account };
    case UPDATE_ACCOUNT_SUCCESS:
      const { account } = action.payload;
      return {
        ...state,
        account,
        accounts: state.accounts.map((c) => (c._id === account._id ? account : c)),
      };
    case DELETE_ACCOUNT_SUCCESS: {
      const { account } = action.payload;
      return { ...state, accounts: state.accounts.filter((c) => c._id !== account._id) };
    }
    default:
      return state;
  }
}
