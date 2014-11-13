var stdout = require("stdout")();
var StreamArray = require("stream-array");
var IntervalStream = require("interval-stream");
var ArrayConcatStream = require("../");

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

StreamArray(data)
	.pipe(IntervalStream(200, {
		objectMode: true
	}))
	.pipe(ArrayConcatStream())
	.pipe(stdout);
