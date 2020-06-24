import {combineReducers} from 'redux';
import loginReducer from './LoginReducer';
import dataFetchReducer from './DataFetchReducer';
const rootReducer = combineReducers({
  loginReducer: loginReducer,
  dataFetchReducer: dataFetchReducer,
});

export default rootReducer;
