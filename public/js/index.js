var socket = io();

// Processing 'connect' event sent by server
socket.on('connect', function() {
    console.log('Connected to server');
});

// Processing 'disconnect' event sent by server
socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

// Processing 'newMessage' event sent by server
socket.on('newMessage', function(message) {
    console.log('New message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
});