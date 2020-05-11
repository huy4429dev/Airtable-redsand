import { combineReducers } from 'redux';
import userReducer from './user';
import headerReducer from './header';
import boardReducer from './board';

const rootReducer = combineReducers({
    userReducer,
    headerReducer,
    boardReducer
});
export default rootReducer;