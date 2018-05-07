var os = require('os');

function getOStime() {

	var hours = (os.uptime() /3600).toFixed(0);
	var min = ((os.uptime() - (hours * 3600)) / 60).toFixed(0);
	var sec = os.uptime() - (hours * 3600) - (min * 60);
	var time = hours + 'hours' + min + 'min' + sec + 'sec';
	console.log(time);
	return time;
}

exports.getOStime = getOStime;