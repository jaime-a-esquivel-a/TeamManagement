//import Intern class
const Intern = require('../lib/Intern');

const intern01 = new Intern('Angela Cullen', 'MERC03', 'a.cullen@merc.com', 'Auckland University');

test('Create an object of Intern class with the following properties: Name=Angela Cullen Id=MERC03 email=a.cullen@merc.com school=Auckland University', () => {
  
    expect(intern01.name).toEqual('Angela Cullen');
    expect(intern01.id).toEqual('MERC03');
    expect(intern01.email).toEqual('a.cullen@merc.com');
    expect(intern01.school).toEqual('Auckland University');

});

test('Throw an error from class Intern due to missing parameter -school-', () => {

    const intern02 = () => new Intern('Angela Cullen', 'MERC03', 'a.cullen@merc.com');
    const err = new Error("Expected parameter 'school' to be a non-empty string");
    expect(intern02).toThrowError(err);

});

test('getName() method, returns name of Intern', () => {

    expect(intern01.getName()).toEqual('Angela Cullen');

});

test('getId() method, returns id of Intern', () => {

    expect(intern01.getId()).toEqual('MERC03');

});

test('getEmail() method, returns email of Intern', () => {

    expect(intern01.getEmail()).toEqual('a.cullen@merc.com');

});

test('getSchool() method, returns school of Intern', () => {

    expect(intern01.getSchool()).toEqual('Auckland University');

});

test('getRole() method, returns role of Intern', () => {

    expect(intern01.getRole()).toEqual('Intern');

});