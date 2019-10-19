const twit = require('twit');
const config = require('./config');
const T = new twit(config);

const retweet = id => {
	T.post('statuses/retweet/:id', { id: `${id}` }, function(err, data, response) {});
};

const hashTags = [
  '#devfestkano',
  '#DevFestKano',
  '#DEVFESTKANO',
  '#DevfestKano',
  '#DevFestKano2019'
];

const work = () => {
	T.get('search/tweets', { q: hashTags.join(', ') }, function(err, data, response) {
		if (!err && data && data.statuses) {
			data.statuses.map(d => retweet(d.id_str));
		}
	});
	console.log('working at:', new Date());
};

setInterval(work, 12000);
