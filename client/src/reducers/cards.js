const initialState = {
	cards: [
		{
			title: 'Taxi Driver',
			year: 1976,
			runtime: '114 min',
			genres: 'Crime, Drama',
			director: 'Martin Scorsese',
			country: 'USA',
			image:
				'https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
			type: 'movie',
			series: false,
			imdburl: 'https://www.imdb.com/title/tt0075314'
		},
		{
			title: 'Platoon',
			year: 1986,
			runtime: '120 min',
			genres: 'Drama, War',
			director: 'Oliver Stone',
			country: 'USA',
			image:
				'https://m.media-amazon.com/images/M/MV5BM2Y1NTQyNWYtNDViNy00ZWRhLTk3MTMtOTI3ZGQ5MDFiNWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
			type: 'movie',
			series: false,
			imdburl: 'https://www.imdb.com/title/tt0091763'
		}
	]
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return {
				...state,
				cards: [ ...state.cards, action.type ]
			};
		case 'REMOVE_CARD':
			return {
				...state,
				cards: []
			};
		default:
			return state;
	}
};
