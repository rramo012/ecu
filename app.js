
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('/dev/ttyACM0', { baudrate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

parser.on('data', console.log);


setInterval( function () {
	port.write( 'main screen turn on \n', function(err) {
		if (err) {
			return console.log('Error on write: ', err.message);
		}
		console.log("Message Written");
	});
}, 100 );

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})
/*
port.on('data', function (data) {
  console.log('Data:', data);
});
*/
