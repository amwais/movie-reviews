import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default (props) => {
	let imdbRating;
	let rtRating;
	let metacriticRating;

	props.ratings.forEach((rating) => {
		const { Source, Value } = rating;

		switch (Source) {
			case 'Internet Movie Database':
				imdbRating = Value;
				return;
			case 'Rotten Tomatoes':
				rtRating = Value;
				return;
			case 'Metacritic':
				metacriticRating = Value;
				return;
			default:
				return;
		}
	});

	return (
		<div>
			<Card raised href={'#'} style={{ backgroundColor: '#eaf2f1' }}>
				<Icon color="red" name="remove" onClick={props.handleDelete} style={{ cursor: 'pointer' }} />
				<Image
					src={props.image}
					size="small"
					centered
					ui={false}
					className="title-poster"
					href={props.imdburl}
					target="_blank"
				/>
				<Card.Content className="card-content">
					<Card.Header>{props.title}</Card.Header>
					<Card.Meta>
						<span>Director: {props.director}</span>
						<br />
						<span>{props.year}</span>
						<br />
						<span>{props.runtime}</span>
					</Card.Meta>
					<Card.Description>{imdbRating && `IMDB: ${imdbRating}`}</Card.Description>
					<Card.Description>{rtRating && `Rotten Tomatoes: ${rtRating}`}</Card.Description>
					<Card.Description>{metacriticRating && `Metacritic: ${metacriticRating}`}</Card.Description>
					<Card.Description />
				</Card.Content>
				<Card.Content extra>
					<Icon name="flag" />
					{props.country}
				</Card.Content>
			</Card>
		</div>
	);
};
