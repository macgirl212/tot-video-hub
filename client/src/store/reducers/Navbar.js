import initialNavbarState from '../states/initialNavbarState';

function navbar(state = initialNavbarState, action) {
	switch (action.type) {
		case 'TITLE':
			return {
				title: action.payload,
			};
		default:
			return state;
	}
}

export default navbar;
