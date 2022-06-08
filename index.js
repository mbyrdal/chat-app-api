var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function() {
    console.log('Listening for requests on port 4000...');
});

// Static files
// Serves files in public/
app.use(express.static('public'));

// Socket setup
// Parameters: server and options
var io = socket(server);
io.on('connection', function (socket) { // When client connects
    console.log('Made Socket connection', socket.id);
}); 