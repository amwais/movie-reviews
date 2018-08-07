const mockData = [
	{
		title: '2001: A Space Odyssey',
		year: 1968,
		runtime: '149 min',
		genres: 'Adventure, Sci-Fi',
		director: 'Stanley Kubrick',
		country: 'UK, USA',
		image:
			'https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		type: 'movie',
		series: false,
		imdburl: 'https://www.imdb.com/title/tt0062622',
		ratings: [
			{
				Source: 'Internet Movie Database',
				Value: '8.3/10'
			},
			{
				Source: 'Rotten Tomatoes',
				Value: '92%'
			},
			{
				Source: 'Metacritic',
				Value: '82/100'
			}
		]
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
		imdburl: 'https://www.imdb.com/title/tt0091763',
		ratings: [
			{
				Source: 'Internet Movie Database',
				Value: '8.1/10'
			},
			{
				Source: 'Rotten Tomatoes',
				Value: '89%'
			},
			{
				Source: 'Metacritic',
				Value: '92/100'
			}
		]
	},
	{
		title: 'A Clockwork Orange',
		year: 1971,
		runtime: '136 min',
		genres: 'Crime, Drama, Sci-Fi',
		director: 'Stanley Kubrick',
		country: 'UK, USA',
		image: 'https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg',
		type: 'movie',
		series: false,
		imdburl: 'https://www.imdb.com/title/tt0066921',
		ratings: [
			{
				Source: 'Internet Movie Database',
				Value: '8.3/10'
			},
			{
				Source: 'Rotten Tomatoes',
				Value: '89%'
			},
			{
				Source: 'Metacritic',
				Value: '78/100'
			}
		]
	},
	{
		title: 'Goodfellas',
		year: 1990,
		runtime: '146 min',
		genres: 'Crime, Drama',
		director: 'Martin Scorsese',
		country: 'USA',
		image:
			'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
		type: 'movie',
		series: false,
		imdburl: 'https://www.imdb.com/title/tt0099685',
		ratings: [
			{
				Source: 'Internet Movie Database',
				Value: '8.7/10'
			},
			{
				Source: 'Rotten Tomatoes',
				Value: '96%'
			},
			{
				Source: 'Metacritic',
				Value: '89/100'
			}
		]
	}
];

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
