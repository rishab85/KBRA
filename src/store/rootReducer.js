import { combineReducers } from 'redux';
import { userReducer as users } from './user/reducer';
import { uiReducer as ui } from './ui/reducer';

export default combineReducers( {
    users,
    ui
} );
