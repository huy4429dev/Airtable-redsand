import { combineReducers } from 'redux';
import userReducer from './user';
import headerReducer from './header';
import boardReducer from './board';
import imgReducer from './img';
import detailtProjectReducers from './detailtProject';

const rootReducer = combineReducers({
    userReducer,
    headerReducer,
    boardReducer,
    imgReducer,
    detailtProjectReducers
});
export default rootReducer;