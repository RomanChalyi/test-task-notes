import { LOAD_NOTE_DETAILS_RESULT, CLEAR_NOTE_DETAILS } from './types';

const noteDetails = (state = null, action) => {
  switch (action.type) {
    case LOAD_NOTE_DETAILS_RESULT: {
      return action.payload;
    }
    case CLEAR_NOTE_DETAILS: {
      return null;
    }

    default: {
      return state;
    }
  }
};

export default noteDetails;
