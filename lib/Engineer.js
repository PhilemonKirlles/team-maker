const Employee = require('./Employee');
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Get methods 
        super(name, id, email);

        // GitHub username
        this.github = github;
    }    

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;