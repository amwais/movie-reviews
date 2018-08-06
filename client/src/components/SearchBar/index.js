import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import { setValue, toggleLoading, getResults, resetSearch } from './actions';

const mapStateToProps = ({ searchbar }) => ({
	loading: searchbar.loading,
	value: searchbar.value,
	results: searchbar.results
});

const mapDispatchToProps = (dispatch) => ({
	setValue: (value) => dispatch(setValue(value)),
	toggleLoading: () => dispatch(toggleLoading()),
	getResults: (value) => dispatch(getResults(value)),
	resetSearch: () => dispatch(resetSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
