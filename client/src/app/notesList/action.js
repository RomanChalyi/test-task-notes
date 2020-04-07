import { LOAD_NOTES_LIST_RESULT } from './types';
import callApi from '../../utils/callApi';

export const loadNotesList = () => callApi('', LOAD_NOTES_LIST_RESULT);
