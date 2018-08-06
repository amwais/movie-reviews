import React, { Component } from 'react';

export default class Cards extends Component {
	render() {
		console.log(this.props.cards);
		return (
			<div>
				{this.props.cards.map(
					({ title, year, runtime, genres, director, country, image, type, series, imdburl }) => {
						return <p key={imdburl}>{title}</p>;
					}
				)}
			</div>
		);
	}
}
