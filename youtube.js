const YouTube = require('youtube-node');
const config = require('./yt-config');

const youtube = new YouTube();
youtube.setKey(config.key);

youtube.search('Exercício em casa para bíceps', 2, function(error, result) {
	if(!error) {
		console.log(JSON.stringfy(result, null, 2));
	} else {
		console.log('Deu erro!');
	}
});