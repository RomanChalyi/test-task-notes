import { LOADING_START, LOADING_END } from './types';

export const initialState = {
  isLoading: false,
  isError: false,
};

const statuses = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_START: {
      return { ...state, isLoading: true };
    }
    case LOADING_END: {
      return { ...state, isLoading: false };
    }
    default: {
      return state;
    }
  }
};

export default statuses;
