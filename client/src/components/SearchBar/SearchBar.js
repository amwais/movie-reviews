import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

export default class SearchBar extends Component {
	componentWillMount() {
		// this.resetComponent();
	}

	handleResultSelect = (e, { result }) => this.props.setValue(result.title);

	handleSearchChange = (e) => {
		const value = e.target.value;
		this.props.toggleLoading();
		this.props.setValue(value);

		setTimeout(() => {
			if (value.length < 1) {
				return this.props.resetSearch();
			}
			this.props.toggleLoading();

			this.props.getResults(this.props.value);
		}, 300);
	};

	render() {
		const { loading, value, results } = this.props;

		console.log(results);

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
