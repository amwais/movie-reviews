import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<h1>Movie Reviews</h1>
					<SearchBar />
				</div>
			</Provider>
		);
	}
}

export default App;
