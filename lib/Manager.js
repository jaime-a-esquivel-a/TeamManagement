//import Employee class
const employee = require('./Employee');

//Manager class extends Employee class
class Manager extends employee{

    constructor(name, id, email, officeNumber){
        
        super(name, id, email);

        if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
            throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
        }

        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    //overwrite getRole() from Employee
    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;