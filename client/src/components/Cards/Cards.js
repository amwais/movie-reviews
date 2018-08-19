import React, { Component } from 'react';
import TitleCard from '../TitleCard';
import { Container, Card } from 'semantic-ui-react';

export default class Cards extends Component {
	render() {
		const containerStyle = {
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'center'
		};
		return (
			<div>
				<Container textAlign="center" style={containerStyle}>
					<Card.Group itemsPerRow={3} centered style={{ margin: '2%' }}>
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
					</Card.Group>
				</Container>
			</div>
		);
	}
}
