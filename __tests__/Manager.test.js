const Manager  = require('../lib/Manager');

test('create manager object', () => {
    const name = 'Biden';
    const id = '4000';
    const email = 'Biden@gmail.com';

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    const manager = new Manager(name, id, email);


})
test('retrieve manager office number', () => {
    const name = 'Biden';
    const id = '4000';
    const officeNumber = '400036'
    const manager = new Manager(name,id,email,officeNumber);
   

    expect(manager.getofficeNumber()).toStrictEqual(expect.stringContaining(manager.officeNumber.toString()));
})