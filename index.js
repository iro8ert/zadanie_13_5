//program.js

var os = require('os');
var OSinfo = require('./modules/OSinfo.js');
var event = require('events');
var EventEmitter = event.EventEmitter;
var emitter = new EventEmitter();
emitter.on("beforeCommand", function(instruction) {
	console.log('Napisałeś:' + instruction + 'chcąc uruchomić polecenie.')
});
emitter.on('afterCommand', function() {
	console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.trim();
		emitter.emit('beforeCommand', instruction);
	 	switch(instruction)  {
			case '/exit':
				process.stdout.write('Quittin app!\n');
				process.exit();
		 		break;
	 		case '/sayhello':
	 			process.stdout.write('hello!\n');
	 			break;
 			case '/getOSinfo':
 				OSinfo.getOSinfo();
 				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		};
		emitter.emit('afterCommand');
	}
});

