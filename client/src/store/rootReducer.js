import { combineReducers } from 'redux';
import statuses from '../app/reducer';
import notesList from '../app/notesList/reducer';

export default combineReducers({ statuses, notesList });