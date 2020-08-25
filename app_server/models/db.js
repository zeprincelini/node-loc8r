var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true});

var readLine = require ("readline");
if (process.platform === "win32"){
var rl = readLine.createInterface ({
    input: process.stdin,
    output: process.stdout
    });
    rl.on ("SIGINT", function (){
    process.emit ("SIGINT");
});
}

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error', (err)=>{
    console.log('Mongoose connection error '+ err);
});

mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose disconnected');
})

gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
});
};


// For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function () {
    process.exit(0);
});
});
// For Heroku app termination
    process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
});
});

require('./locations')