import { EDIT_NOTE, LOAD_NOTE_DATA, CLEAR_FORM } from './types';
import callApi from '../../utils/callApi';

export const editNote = (id, title, description, history) => (dispatch) => {
  dispatch(callApi('', EDIT_NOTE, { method: 'PUT', body: { id, title, description } })).then(() => {
    return history.push('/');
  });
};

export const createNote = (title, description, history) => (dispatch) => {
  dispatch(callApi('', null, { method: 'POST', body: { title, description } })).then(() => {
    return history.push('/');
  });
};

export const loadNoteData = (id) => callApi(id, LOAD_NOTE_DATA);

export const clearForm = () => ({ type: CLEAR_FORM });
