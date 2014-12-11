var Transform = require("stream").Transform;

module.exports = ArrayConcatStream;

/**
 * A stream that takes in bits of data, and concatonates it into an array
 * Every time the array is updated, it is output
 * @param {Array} initialArray Optional initial array to build up from
 */
function ArrayConcatStream(initialArray) {
	// Ensure you have an initial array for the state
	var state = initialArray || [];

	// Guard against having a non-Array passed in as initial state
	if (!Array.isArray(state))
		throw new Error('First argument must be an Array');

	// Construct the stream
	var stream = new Transform({
		objectMode: true
	});

	stream._transform = function (data, encoding, callback) {
		// When receiving new data, concatonate it with old array
		state = state.concat(data);
		// Output the new array
		callback(null, state);
	}

	// TODO: Remove this, maybe?
	stream._flush = function (callback) {
		callback();
	}

	return stream
}
