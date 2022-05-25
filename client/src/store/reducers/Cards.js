import initialCardsState from '../states/initialCardsState';

function cards(state = initialCardsState, action) {
	// toggle selected card category to display
	switch (action.type) {
		case 'R':
			return {
				R: !state.R,
				MR: false,
				SR: false,
				SSR: false,
			};
		case 'MR':
			return {
				R: false,
				MR: !state.MR,
				SR: false,
				SSR: false,
			};
		case 'SR':
			return {
				R: false,
				MR: false,
				SR: !state.SR,
				SSR: false,
			};
		case 'SSR':
			return {
				R: false,
				MR: false,
				SR: false,
				SSR: !state.SSR,
			};
		case 'RESET':
			return {
				R: false,
				MR: false,
				SR: false,
				SSR: false,
			};
		default:
			return state;
	}
}

export default cards;
