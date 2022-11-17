//import Engineer class
const Engineer = require('../lib/Engineer');

const engineer01 = new Engineer('Peter Bonnington', 'MERC02', 'p.bonnington@merc.com', 'p-bonnington');

test('Create an object of Engineer class with the following properties: Name=Peter Bonnington Id=MERC02 email=p.bonnington@merc.com officeNumber=4402', () => {
  
    expect(engineer01.name).toEqual('Peter Bonnington');
    expect(engineer01.id).toEqual('MERC02');
    expect(engineer01.email).toEqual('p.bonnington@merc.com');
    expect(engineer01.github).toEqual('p-bonnington');

});

test('Throw an error from class Engineer due to wrong type parameter -github-', () => {

    const engineer02 = () => new Engineer('Peter Bonnington', 'MERC02', 'p.bonnington@merc.com');
    const err = new Error("Expected parameter 'github' to be a non-empty string");
    expect(engineer02).toThrowError(err);

});

test('getName() method, returns name of Engineer', () => {

    expect(engineer01.getName()).toEqual('Peter Bonnington');

});

test('getId() method, returns id of Engineer', () => {

    expect(engineer01.getId()).toEqual('MERC02');

});

test('getEmail() method, returns email of Engineer', () => {

    expect(engineer01.getEmail()).toEqual('p.bonnington@merc.com');

});

test('getGithub() method, returns github username of Engineer', () => {

    expect(engineer01.getGithub()).toEqual('p-bonnington');

});

test('getRole() method, returns role of Engineer', () => {

    expect(engineer01.getRole()).toEqual('Engineer');

});