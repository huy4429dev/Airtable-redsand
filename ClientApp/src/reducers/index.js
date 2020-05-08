import { combineReducers } from 'redux';
import userReducer from './user';
import headerReducer from './header';

const rootReducer = combineReducers({
    userReducer,
    headerReducer
});
export default rootReducer;