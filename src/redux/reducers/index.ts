// src/redux/reducers/index.ts
import { combineReducers } from 'redux';
import cryptoReducer from '../cryptoSlice';

const rootReducer = combineReducers({
  crypto: cryptoReducer,
});

export default rootReducer;
