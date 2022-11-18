//import Employee class
const employee = require('./Employee');

//Intern class extends Employee class
class Intern extends employee{

    constructor(name, id, email, school){

        super(name, id, email);

        if (typeof school !== 'string' || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

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