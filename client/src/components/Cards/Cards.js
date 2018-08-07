import React, { Component } from 'react';
import TitleCard from '../TitleCard';

export default class Cards extends Component {
	render() {
		return (
			<div style={{ display: 'flex' }}>
				{this.props.cards.map(
					({ title, year, runtime, genres, director, country, image, type, series, imdburl, ratings }) => {
						if (!ratings) {
							return;
						}

						return (
							<TitleCard
								key={imdburl}
								runtime={runtime}
								image={image}
								title={title}
								year={year}
								director={director}
								country={country}
								genres={genres}
								type={type}
								series={series}
								imdburl={imdburl}
								ratings={ratings}
							/>
						);
					}
				)}
			</div>
		);
	}
}
