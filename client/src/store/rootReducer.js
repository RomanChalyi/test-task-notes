import { combineReducers } from 'redux';
import statuses from '../app/reducer';
import notesList from '../app/notesList/reducer';
import noteData from '../app/form/reducer';

export default combineReducers({ statuses, notesList, noteData });
