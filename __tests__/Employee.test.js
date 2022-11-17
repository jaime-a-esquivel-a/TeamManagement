//import Employee class
const Employee = require('../lib/Employee');


const employee01 = new Employee('Toto Wolff', 'MERC01', 't.wolff@merc.com');

test('Create an object of Employee class with the following properties: Name=Toto Wolff Id=MERC01 email=t.wolff@merc.com', () => {
  
    expect(employee01.name).toEqual('Toto Wolff');
    expect(employee01.id).toEqual('MERC01');
    expect(employee01.email).toEqual('t.wolff@merc.com');

});

test('Throw an error from class Employee due to empty parameters', () => {

    const employee02 = () => new Employee();
    expect(employee02).toThrowError();

});

test('Throw an error from class Employee due to empty parameter -name-', () => {

    const employee02 = () => new Employee('', 'MERC01', 't.wolff@merc.com');
    expect(employee02).toThrowError();

});

test('getName() method, returns name of Employee', () => {

    expect(employee01.getName()).toEqual('Toto Wolff');

});

test('getId() method, returns id of Employee', () => {

    expect(employee01.getId()).toEqual('MERC01');

});

test('getEmail() method, returns email of Employee', () => {

    expect(employee01.getEmail()).toEqual('t.wolff@merc.com');

});

test('getRole() method, returns role of Employee', () => {

    expect(employee01.getRole()).toEqual('Employee');

});

