//import Employee class
const employee = require('./Employee');

//Engineer class extends Employee class
class Engineer extends employee{

    constructor(name, id, email, github){

        super(name, id, email);

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