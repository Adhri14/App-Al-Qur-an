import { combineReducers } from 'redux';
import { homeReducer } from './home';
import { detailReducer } from './detail';

const reducer = combineReducers({ homeReducer, detailReducer });

export default reducer;
