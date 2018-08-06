import { combineReducers } from 'redux';
import searchbar from './searchbar';
import cards from './cards';

export default combineReducers({
	searchbar,
	cards
});
