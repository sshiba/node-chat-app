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
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery("#message-template").html();
    var html = Mustache.render(template, {
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

socket.on('newPositionMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery("#location-message-template").html();
    var html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    var messageTextbox = jQuery('[name=message]');

    socket.emit('createMessage', {
        from: 'User',
        text: messageTextbox.val()
    }, function() {
        messageTextbox.val('');
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function() {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }

    // Disable the Send Location button to avoid user to keep trying to hit again and again
    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position) {
        // Enable the Send Location button once response came back
        locationButton.removeAttr('disabled').text('Send location');

        socket.emit('createPositionMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function() {
        // Enable the Send Location button if error
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location');
    });
});