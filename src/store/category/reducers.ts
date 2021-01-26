import {
  CategoryActionTypes,
  CategoryState,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ONE_CATEGORY_SUCCESS,
  SET_LOADING,
  SET_OPERATION_LOADING,
  UPDATE_CATEGORY_SUCCESS,
} from './types';

const initialState: CategoryState = {
  categories: [],
};

export function categoryReducer(state = initialState, action: CategoryActionTypes): CategoryState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload.loading };

    case SET_OPERATION_LOADING:
      return { ...state, opLoading: action.payload.opLoading };

    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload.categories, loading: false };

    case CREATE_CATEGORY_SUCCESS:
      return { ...state, categories: [action.payload.category, ...state.categories], opLoading: false };

    case GET_ONE_CATEGORY_SUCCESS:
      return { ...state, category: action.payload.category, loading: false };

    case UPDATE_CATEGORY_SUCCESS: {
      const { category } = action.payload;
      return {
        ...state,
        category,
        categories: state.categories.map((c) => (c._id === category._id ? category : c)),
        opLoading: false,
      };
    }

    case DELETE_CATEGORY_SUCCESS: {
      const { category } = action.payload;
      return {
        ...state,
        categories: state.categories.filter((c) => c._id !== category._id),
        opLoading: false,
      };
    }

    default:
      return state;
  }
}
