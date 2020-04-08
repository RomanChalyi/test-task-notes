import { combineReducers } from 'redux';
import statuses from '../app/reducer';
import notesList from '../app/notesList/reducer';
import noteDetails from '../app/noteDetails/reducer';

export default combineReducers({ statuses, notesList, noteDetails });
