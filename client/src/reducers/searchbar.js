const initialState = {
	loading: false,
	value: '',
	results: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_LOADING':
			return {
				...state,
				loading: !state.loading
			};
		case 'RESET_SERACH':
			return {
				...initialState
			};
		case 'EMPTY_RESULTS':
			return {
				...state,
				results: []
			};
		case 'SET_RESULTS':
			return {
				...state,
				results: action.payload
			};
		case 'SET_VALUE':
			return {
				...state,
				value: action.payload
			};
		default:
			return state;
	}
};
