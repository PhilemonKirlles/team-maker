const Manager  = require('../lib/Manager');

test('create manager object', () => {
    const name = 'Biden';
    const id = '4000';
    const email = 'Biden@gmail.com';

    const manager = new Manager(name, id, email);

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    


})
test('retrieve manager office number', () => {
    const name = 'Biden';
    const id = '4000';
    const email = 'Biden@gmail.com';
    const officeNumber = '400036'
    
    const manager = new Manager(name,id,email,officeNumber);
   

    expect(manager.getOfficeNumber()).toStrictEqual(expect.stringContaining(manager.officeNumber.toString()));
})