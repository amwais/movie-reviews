const express = require('express');
const imdb = require('imdb-api');

const router = express.Router();

router.get('/search/:title', (req, res) => {
	imdb
		.search(
			{
				name: `${req.params.title.replace(' ', '_')}`
			},
			{
				apiKey: 'bda00881',
				timeout: 30000
			}
		)
		.then(({ results }) => {
			const searchResults = results.map(({ title, year, poster }) => {
				const result = {
					title,
					price: year,
					image: poster
				};
				return result;
			});
			res.json(searchResults.slice(0, 4));
		})
		.catch((err) => {
			res.json({
				error: err.message
			});
		});
});

router.get('/:title', (req, res) => {
	imdb
		.get(
			{
				name: `${req.params.title.replace(' ', '_')}`
			},
			{
				apiKey: 'bda00881',
				timeout: 30000
			}
		)
		.then(({ title, year, runtime, genres, director, country, poster, ratings, type, series, imdburl }) => {
			res.json({
				title,
				year,
				runtime,
				genres,
				director,
				country,
				image: poster,
				// description: ratings,
				type,
				series,
				imdburl
			});
		})
		.catch((err) =>
			res.json({
				error: err.message
			})
		);
});

// Example with web scraping
// router.get('/:title', (req, res) => {
// 	xray(`https://www.rottentomatoes.com/m/${req.params.title}`, {
// 		rt_tomatoMeter: '#tomato_meter_link > span.meter-value.superPageFontColor',
// 		rt_audienceScore:
// 			'#scorePanel > div.col-sm-8.col-xs-12.audience-panel > div.audience-score.meter > a > div > div.media-body > div.meter-value > span'
// 	}).then((response) => {
// 		console.log(response);
// 		res.json(response);
// 	});
// });

module.exports = router;
