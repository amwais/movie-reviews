import axios from 'axios';

export const addCard = (selection) => (dispatch) => {
	console.log(selection);
	axios.get(`/ratings/${selection.title}`).then((response) => {
		dispatch({
			type: 'ADD_CARD',
			payload: response.data
		});
	});
};

export const setValue = (value) => (dispatch) => {
	dispatch({
		type: 'SET_VALUE',
		payload: value
	});
};

export const resetSearch = () => (dispatch) => {
	dispatch({
		type: 'RESET_SERACH'
	});
};

export const toggleLoading = () => (dispatch) => {
	dispatch({
		type: 'TOGGLE_LOADING'
	});
};

export const getResults = (value) => (dispatch) => {
	dispatch({
		type: 'TOGGLE_LOADING'
	});
	axios
		.get(`/ratings/search/${value}`)
		.then((res) => {
			if (!res.data.error) {
				dispatch({
					type: 'SET_RESULTS',
					payload: res.data
				});
				dispatch({
					type: 'TOGGLE_LOADING'
				});
			} else {
				dispatch({
					type: 'TOGGLE_LOADING'
				});
				dispatch({
					type: 'EMPTY_RESULTS'
				});
			}
		})
		.catch((err) => console.log(err));
};
