import {
  LOADING_START,
  LOADING_END,
  SHOW_ERROR_MESSAGE,
  HIDE_ERROR_MESSAGE,
  SET_LANGUAGE,
} from './types';

export const initialState = {
  isLoading: false,
  isError: false,
  errorInfo: '',
  lang: 'en',
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
    case SET_LANGUAGE: {
      return { ...state, lang: action.lang };
    }
    default: {
      return state;
    }
  }
};

export default statuses;
