//import Employee class
const employee = require('./Employee');

//Engineer class extends Employee class
class Engineer extends employee{

    constructor(name, id, email, github){

        super(name, id, email);

        if (typeof github !== 'string' || !github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        this.github = github;

    }

    getGithub(){
        return this.github;
    }

    //overwrite getRole() from Employee
    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;