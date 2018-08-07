import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { setValue, toggleLoading, getResults, resetSearch, addCard } from './actions';

const mapStateToProps = ({ searchbar, cards }) => ({
	loading: searchbar.loading,
	value: searchbar.value,
	results: searchbar.results,
	cards: cards.cards
});

const mapDispatchToProps = (dispatch) => ({
	setValue: (value) => dispatch(setValue(value)),
	toggleLoading: () => dispatch(toggleLoading()),
	getResults: (value) => dispatch(getResults(value)),
	resetSearch: () => dispatch(resetSearch()),
	addCard: (selection) => dispatch(addCard(selection))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
