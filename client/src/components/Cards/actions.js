export const handleDelete = (imdburl, title) => (dispatch) => {
	dispatch({
		type: 'REMOVE_CARD',
		payload: { imdburl, title }
	});
};
