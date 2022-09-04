const Employee = require('../lib/Employee');

test('create employee object', () => {
    const name = 'Sally';
    const id = '1000';
    const email = 'Sally@gmail.com';
    const employee = new Employee(name,id,email);

    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);

})