import Cards from './Cards';
import { connect } from 'react-redux';
import { handleDelete } from './actions';

export const mapStateToProps = ({ cards }) => ({
	cards: cards.cards
});

export const mapDispatchToProps = (dispatch) => ({
	handleDelete: (imdburl, title) => dispatch(handleDelete(imdburl, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
