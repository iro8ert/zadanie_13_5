var os = require('os');
var OStime = require('./modules/OStime');
var colors = require('colors');

function getOSinfo() {
        var type = os.type();
                if(type === 'Darwin') {
                    type = 'OSX';
                } else if(type === 'Windows_NT') {
                    type = 'Windows';
                }
        var release = os.release();
        var cpu = os.cpus()[0].model;
        var uptime = os.uptime();
        var userInfo = os.userInfo();
        var osTime = os.uptime();
        console.log('System:'.grey, type);
        console.log('Release:'.red, release);
        console.log('CPU model:'.blue, cpu);
        console.log('Uptime: ~'.green, (uptime / 60).toFixed(0), 'min');
        console.log('User name:'.yellow, userInfo.username);
        console.log('Home dir:', userInfo.homedir);
        console.log('Time:'.gray, OStime.getOStime(osTime));
}

exports.getOSinfo = getOSinfo;