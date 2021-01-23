import {
  CategoryActionTypes,
  CategoryState,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ONE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
} from './types';

const initialState: CategoryState = {
  categories: [],
};

export function categoryReducer(state = initialState, action: CategoryActionTypes): CategoryState {
  switch (action.type) {
    case GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload.categories };
    case CREATE_CATEGORY_SUCCESS:
      return { ...state, categories: [action.payload.category, ...state.categories] };
    case GET_ONE_CATEGORY_SUCCESS:
      return { ...state, category: action.payload.category };
    case UPDATE_CATEGORY_SUCCESS:
      const { category } = action.payload;
      return {
        ...state,
        category,
        categories: state.categories.map((c) => (c._id === category._id ? category : c)),
      };
    case DELETE_CATEGORY_SUCCESS: {
      const { category } = action.payload;
      return { ...state, categories: state.categories.filter((c) => c._id !== category._id) };
    }
    default:
      return state;
  }
}
