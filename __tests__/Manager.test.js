const Manager  = require('../lib/Manager');

test('create manager object', () => {
    const name = 'Biden';
    const id = '4000';
    const officeNumber = '400036'
    const manager = new Manager(name,id,email,officeNumber);
    const email = 'Biden@gmail.com';

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.email).toBe(email);

})
test('retrieve manager office number', () => {
    const name = 'Biden';
    const id = '4000';
    const officeNumber = '400036'
    const manager = new Manager(name,id,email,officeNumber);
    const email = 'Biden@gmail.com';
   

    expect(manager.getofficeNumber()).toStrictEqual(expect.stringContaining(manager.officeNumber.toString()));
})