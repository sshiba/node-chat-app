var socket = io();

// Processing 'connect' event sent by server
socket.on('connect', function() {
    console.log('Connected to server');

    // Sending a 'createEmail' message to server
    socket.emit('createMessage', {
        to: 'amshiba@gmail.com',
        text: 'Hey. This is Sidney'
    });
});

// Processing 'disconnect' event sent by server
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// Processing 'newMessage' event sent by server
socket.on('newMessage', function(msg) {
    console.log('New message', msg);
});