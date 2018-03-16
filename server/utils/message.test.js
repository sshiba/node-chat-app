const expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

// Autotest for generateMessage function
describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Sidney';
        var text = 'Hello!';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({ from, text });
        // expect(message.from).toBe(from);
        // expect(message.text).toBe(text);
    });
});

// Autotest for generateLocationMessage function
describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'Sidney';
        var latitude = 12345;
        var longitude = 67890;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var message = generateLocationMessage(from, latitude, longitude);

        // expect(message.from).toBe(from);
        // expect(message.url).toBe(url);
        expect(message).toMatchObject({ from, url });
        expect(typeof message.createdAt).toBe('number');
    });
});