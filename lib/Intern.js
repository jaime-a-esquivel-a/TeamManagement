//import Employee class
const employee = require('./Employee');

//Intern class extends Employee class
class Intern extends employee{

    constructor(name, id, email, school){

        super(name, id, email);

        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    //overwrite getRole() from Employee
    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;