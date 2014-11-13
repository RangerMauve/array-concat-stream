var Transform = require("stream").Transform;

module.exports = ArrayConcatStream;

function ArrayConcatStream(state) {
	var state = [];

	var stream = new Transform({
		objectMode: true
	});

	stream._transform = function (data, encoding, callback) {
		state = state.concat(data);
		callback(null, state);
	}

	stream._flush = function (callback) {
		callback();
	}

	return stream
}
