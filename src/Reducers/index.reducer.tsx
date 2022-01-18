import { combineReducers } from 'redux';
import homeReducer from './home/home.reduce';
import checkoutReducer from './checkoutReducer/checkout.reducer';

const AppReducer = combineReducers({
    homeReducer, checkoutReducer
});


export default AppReducer;