const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '/../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // Sending a 'newMessage' message to the user
    // socket.emit('newMessage', {
    //     from: 'sidney@gmail.com',
    //     text: 'Hey this is Sidney. What is going on?',
    //     createdAt: 1234
    // })

    //Processing new message received from the client app and sending back to all clients
    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
        io.emit('createMessage', {
            from: newMessage.from,
            text: newMessage.text,
            createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });
});

server.listen(port, () => {
    console.log(`Chat-app server running on port ${port}`);
});