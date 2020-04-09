import { LOAD_NOTES_LIST_RESULT } from './types';
import callApi from '../../utils/callApi';

export const loadNotesList = () => callApi('', LOAD_NOTES_LIST_RESULT);

export const deleteNote = (id) => (dispatch) =>
  dispatch(callApi('', null, { method: 'DELETE', body: { id } })).then((data) =>
    dispatch({
      type: LOAD_NOTES_LIST_RESULT,
      payload: data,
    })
  );
