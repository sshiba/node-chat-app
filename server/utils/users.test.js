const expect = require('expect');

const { Users } = require('./users');

beforeEach(() => {
    users = new Users();

    users.users = [{
        id: '1',
        name: 'Virginie',
        room: 'Node Course'
    }, {
        id: '2',
        name: 'Anais',
        room: 'React Course'
    }, {
        id: '3',
        name: 'Kenji',
        room: 'Node Course'
    }];
});

describe('Users', () => {
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Sidney',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        var userId = '99';
        var user = users.removeUser(userId);
        expect(user).toBe(undefined);
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId);

        expect(user).toBe(undefined);
    });

    it('should return names for node course', () => {
        var usersList = users.getUserList('Node Course');

        // expect(userList).toEqual([users.users[0].name, users.users[2].name]);
        expect(usersList).toEqual(['Virginie', 'Kenji']);
    });

    it('should return names for react course', () => {
        var usersList = users.getUserList('React Course');

        expect(usersList).toEqual(['Anais']);
    });
});