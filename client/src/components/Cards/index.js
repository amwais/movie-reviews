import Cards from './Cards';
import { connect } from 'react-redux';

export const mapStateToProps = ({ cards }) => ({
	cards: cards.cards
});

export default connect(mapStateToProps, undefined)(Cards);
