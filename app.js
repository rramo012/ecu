var rpio = require('rpio');
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log('Hello Landed');
});

app.get( '/run', function (req, res) {
	/*
	 * Set the initial state to low.  The state is set prior to the pin becoming
	 * active, so is safe for devices which require a stable setup.
	 */
	rpio.open(12, rpio.OUTPUT, rpio.LOW);

	/*
	 * The sleep functions block, but rarely in these simple programs does one care
	 * about that.  Use a setInterval()/setTimeout() loop instead if it matters.
	 */
	for (var i = 0; i < 5; i++) {
	        /* On for 1 second */
	        rpio.write(12, rpio.HIGH);
			console.log('high');
	        rpio.sleep(1);

	        /* Off for half a second (500ms) */
	        rpio.write(12, rpio.LOW);
			console.log('low');
	        rpio.msleep(500);
	}

	res.send('Done Blicking!')

} );


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
