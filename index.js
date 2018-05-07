//program.js

var os = require('os');
var OSinfo = require('c:/kodilla/zadanie_13_5/modules/OSinfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.trim();
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
	}
});

