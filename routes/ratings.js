const express = require('express');
const imdb = require('imdb-api');

const router = express.Router();

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
				poster,
				ratings,
				type,
				series,
				imdburl
			});
		})
		.catch((err) => err);
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
