import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default (props) => (
	<div>
		<Card>
			<Image src={props.image} />
			<Card.Content>
				<Card.Header>{props.title}</Card.Header>
				<Card.Meta>
					<span>{props.director}</span>
					<br />
					<span>{props.year}</span>
					<br />
					<span>{props.runtime}</span>
				</Card.Meta>
				<Card.Description>{`IMDB: ${props.ratings[0].Value}`}</Card.Description>
				<Card.Description>{`Rotten Tomatoes: ${props.ratings[1].Value}`}</Card.Description>
				<Card.Description>{`Metacritic: ${props.ratings[2].Value}`}</Card.Description>
				<Card.Description />
			</Card.Content>
			<Card.Content extra>
				<a>
					<Icon name="flag" />
					{props.country}
				</a>
			</Card.Content>
		</Card>
	</div>
);
