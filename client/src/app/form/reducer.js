import { EDIT_NOTE, LOAD_NOTE_DATA, CLEAR_FORM } from './types';

const noteData = (state = null, action) => {
  switch (action.type) {
    case LOAD_NOTE_DATA: {
      return action.payload;
    }
    case EDIT_NOTE: {
      return action.payload;
    }
    case CLEAR_FORM: {
      return null;
    }
    default: {
      return state;
    }
  }
};

export default noteData;
