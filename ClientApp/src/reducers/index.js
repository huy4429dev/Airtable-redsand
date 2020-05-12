import { combineReducers } from 'redux';
import userReducer from './user';
import headerReducer from './header';
import detailtProjectReducers from './detailtProject';

const rootReducer = combineReducers({
    userReducer,
    headerReducer,
    detailtProjectReducers
});
export default rootReducer;