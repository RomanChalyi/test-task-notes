import { LOAD_NOTES_LIST_RESULT } from './types';

const notesList = (state = null, action) => {
  switch (action.type) {
    case LOAD_NOTES_LIST_RESULT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default notesList;
