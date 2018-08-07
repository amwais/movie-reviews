import React, { Component } from 'react';
import TitleCard from '../TitleCard';
import { Container } from 'semantic-ui-react';

export default class Cards extends Component {
	render() {
		const containerStyle = {
			display: 'flex',
			flexWrap: 'wrap'
		};
		return (
			<div>
				<Container textAlign="center" style={containerStyle}>
					{this.props.cards.map(
						({
							title,
							year,
							runtime,
							genres,
							director,
							country,
							image,
							type,
							series,
							imdburl,
							ratings
						}) => {
							if (!ratings) {
								return undefined;
							}

							return (
								<TitleCard
									style={{ flexDirection: 'row' }}
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
									handleDelete={() => this.props.handleDelete(imdburl, title)}
								/>
							);
						}
					)}
				</Container>
			</div>
		);
	}
}
