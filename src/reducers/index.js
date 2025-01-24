import {combineReducers }from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser';
import channelReducer from './channel';
import videoReducer from './video';


export default combineReducers({
    authReducer,
    currentUserReducer,
    channelReducer,
    videoReducer,
});