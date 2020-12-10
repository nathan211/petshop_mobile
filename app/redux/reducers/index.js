import { combineReducers } from 'redux';
import authReducer from '../authSlice';
import shoppingCartReducer from '../shoppingCartSlice';

export default combineReducers({ auth: authReducer, cart: shoppingCartReducer });