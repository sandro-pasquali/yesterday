var Cache = require('./rediscache');

var cache = new Cache();

cache
.set('sandro', {
	foo: 'bar'
})
.then(function() {
	cache
	.get('sandro')
	.then(function(val) {
		console.log(val);
		cache
		.clear()
		.then(cache.close.bind(cache));
	})
})