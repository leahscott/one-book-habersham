/* Twitter Feed */
var config = {
  "id": '678795546287579142',
  "domId": 'twitter-container',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": false,
  "showTime": false,
  "showImages": false,
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config);

/* Loader */
$('html').imagesLoaded( function() {
	$('#loader').addClass('is-ready');
});