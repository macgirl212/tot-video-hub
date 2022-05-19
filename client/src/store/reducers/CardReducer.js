function cardReducer(state, action) {
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
		default:
			console.log('Ummm... what just happened? Error!');
	}
}

export default cardReducer;
