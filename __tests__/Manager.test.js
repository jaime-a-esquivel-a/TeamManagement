//import Manager class
const Manager = require('../lib/Manager');

const manager01 = new Manager('Toto Wolff', 'MERC01', 't.wolff@merc.com', 4401);

test('Create an object of Manager class with the following properties: Name=Toto Wolff Id=MERC01 email=t.wolff@merc.com officeNumber=4401', () => {
  
    expect(manager01.name).toEqual('Toto Wolff');
    expect(manager01.id).toEqual('MERC01');
    expect(manager01.email).toEqual('t.wolff@merc.com');
    expect(manager01.officeNumber).toEqual(4401);

});

test('Throw an error from class Manager due to wrong type parameter -officeNumber-', () => {

    const manager02 = () => new Manager('Toto Wolff', 'MERC01', 't.wolff@merc.com', 'ABDC');
    const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
    expect(manager02).toThrowError(err);

});

test('getName() method, returns name of Manager', () => {

    expect(manager01.getName()).toEqual('Toto Wolff');

});

test('getId() method, returns id of Manager', () => {

    expect(manager01.getId()).toEqual('MERC01');

});

test('getEmail() method, returns email of Manager', () => {

    expect(manager01.getEmail()).toEqual('t.wolff@merc.com');

});

test('getOfficeNumber() method, returns office number of Manager', () => {

    expect(manager01.getOfficeNumber()).toEqual(4401);

});

test('getRole() method, returns role of Manager', () => {

    expect(manager01.getRole()).toEqual('Manager');

});
