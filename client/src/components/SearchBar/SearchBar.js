import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

export default class SearchBar extends Component {
	componentWillMount() {
		this.timer = null;
	}

	handleResultSelect = (e, { result }) => this.props.addCard(result);

	handleSearchChange = (e) => {
		const value = e.target.value;
		this.props.setValue(value);

		clearTimeout(this.timer);

		this.timer = setTimeout(() => {
			if (value.length < 1) {
				return this.props.resetSearch();
			}
			this.props.getResults(this.props.value);
		}, 300);
	};

	render() {
		const { loading, value, results } = this.props;

		// console.log(results);

		return (
			<Grid>
				<Grid.Column width={16}>
					<Search
						loading={loading}
						onResultSelect={this.handleResultSelect}
						onSearchChange={this.handleSearchChange}
						value={value}
						results={results}
					/>
				</Grid.Column>
			</Grid>
		);
	}
}
