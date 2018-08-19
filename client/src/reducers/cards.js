import { mockData } from '../keys';

const initialState = {
	cards: mockData
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return {
				...state,
				cards: [ ...state.cards, action.payload ]
			};
		case 'REMOVE_CARD':
			const { imdburl, title } = action.payload;
			return {
				...state,
				cards: state.cards.filter((card) => {
					return card.title !== title && card.imdburl !== imdburl;
				})
			};
		case 'REMOVE_ALL_CARDS':
			return {
				...state,
				cards: []
			};
		default:
			return state;
	}
};
