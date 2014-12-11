# array-concat-stream

A stream that takes in values and builds up an array. Every time the array is
updated, the entire thing is emitted.

The idea is that you can take a stream of incoming events and then trigger some
sort of action that requires the list of all the events gotten thus far.

## API

### `ArrayConcatStream([initialArray])`

#### parameters
* `[initialArray]` (Array): Initial array to build up from

#### returns
 (DuplexStream): When data is piped into it, it concatenates it with an internal array, then outputs the entire array

## Example

``` javascript
var stdout = require("stdout")();
var StreamArray = require("stream-array");
var IntervalStream = require("interval-stream");
var ArrayConcatStream = require("array-concat-stream");

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

StreamArray(data)
  .pipe(IntervalStream(200, {
    objectMode: true
  }))
  .pipe(ArrayConcatStream())
  .pipe(stdout);

```
