import { combineReducers } from 'redux';
import * as Navigation from './navigation';

export default combineReducers(Object.assign(
    Navigation,
));