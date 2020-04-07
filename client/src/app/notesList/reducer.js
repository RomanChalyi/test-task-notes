import { LOAD_NOTES_LIST_RESULT } from './types';

export const initialState = {
  notes: null,
};

const notesList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NOTES_LIST_RESULT: {
      return { notes: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default notesList;
