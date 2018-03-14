const expect = require('expect');

var { generateMessage } = require('./message');

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