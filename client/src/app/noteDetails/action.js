import { LOAD_NOTE_DETAILS_RESULT, CLEAR_NOTE_DETAILS } from './types';
import callApi from '../../utils/callApi';

export const loadNoteDetails = (id) => callApi(id, LOAD_NOTE_DETAILS_RESULT);
export const clearNoteDetails = () => ({ type: CLEAR_NOTE_DETAILS });
