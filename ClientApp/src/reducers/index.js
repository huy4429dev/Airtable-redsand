import { combineReducers } from 'redux';
import userReducer from './user';
import headerReducer from './header';
import boardReducer from './board';
import imgReducer from './img';

const rootReducer = combineReducers({
    userReducer,
    headerReducer,
    boardReducer,
    imgReducer
});
export default rootReducer;