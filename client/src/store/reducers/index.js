import { combineReducers } from 'redux';
import cards from './Cards';
import navbar from './Navbar';

export default combineReducers({
	navbar,
	cards,
});
