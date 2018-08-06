import Cards from './Cards';
import { connect } from 'react-redux';

export const mapStateToProps = ({ cards }) => ({
	cards: cards.cards
});

export const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
