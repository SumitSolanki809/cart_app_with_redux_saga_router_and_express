import { combineReducers } from 'redux';
import { setItemsToStoreReducer } from './itemsReducer';

export default combineReducers({
 itemsList: setItemsToStoreReducer
});