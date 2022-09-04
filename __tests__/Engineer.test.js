const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const name = 'Jhon';
    const id = '2000';
    const email = 'John@gmail.com';
    const github = 'johnK'
    const engineer = new Engineer(name,id,email,github);

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github)
})

test('retrieve Github from engineer', () => {
    const name = 'Jhon';
    const id = '2000';
    const email = 'John@gmail.com';
    const github = 'johnK'
    const engineer = new Engineer(name,id,email,github);

    expect(engineer.getGithub()).toStrictEqual(expect.stringContaining(engineer.github.toString()));
})