import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import Cards from './components/Cards';
import store from './store';
import { Provider } from 'react-redux';
import { Button } from 'semantic-ui-react';
import './App.css';

class App extends Component {
	render() {
		const headerStyle = {
			margin: 'auto',
			fontFamily: 'Monospace'
		};
		return (
			<Provider store={store}>
				<div className="App">
					<div className="app-header">
						<h1 style={headerStyle}>Movie Ratings</h1>
						{/* <Button basic inverted color="green" style={{ flex: '1' }}>
							Green
						</Button> */}
						<SearchBar />
					</div>
					<div className="cards-area">
						<Cards />
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
