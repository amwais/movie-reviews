import axios from 'axios';

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
	axios.get(`/ratings/${value}`).then((res) => {
		dispatch({
			type: 'SET_RESULTS',
			payload: res.data
		});
	});
};
