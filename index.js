const twit = require('twit');
const config = require('./config');
const T = new twit(config);

const retweet = id => {
	T.post('statuses/retweet/:id', { id: `${id}` }, function(err, data, response) {});
};

const work = () => {
	T.get('search/tweets', { q: '#devfestkano, #DevFestKano, #DEVFESTKANO, #DevfestKano' }, function(err, data, response) {
		if (!err && data && data.statuses) {
			data.statuses.map(d => retweet(d.id_str));
		}
	});
	console.log('working at:', new Date());
};

setInterval(work, 12000);
