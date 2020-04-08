import { LOADING_START, LOADING_END, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from './types';

export const initialState = {
  isLoading: false,
  isError: false,
  errorInfo: '',
};

const statuses = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, isLoading: true };
    }
    case LOADING_END: {
      return { ...state, isLoading: false };
    }
    case SHOW_ERROR_MESSAGE: {
      return { ...state, isError: true, errorInfo: action.payload };
    }
    case HIDE_ERROR_MESSAGE: {
      return { ...state, isError: false, errorInfo: '' };
    }
    default: {
      return state;
    }
  }
};

export default statuses;
