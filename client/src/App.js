import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<h1>Movie Reviews</h1>
					<SearchBar />
					<Cards />
				</div>
			</Provider>
		);
	}
}

export default App;
