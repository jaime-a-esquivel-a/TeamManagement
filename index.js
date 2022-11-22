// Import required packages
const inquirer = require('inquirer');
const fs = require('fs');
const genhtml = require('./src/generateHTML');

// Import required classes:
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require('./src/generateHTML');

//Array of objects / Team Memebers
const team =[];

// Questions Array for Manager
const managerQuest = [
    {
        type: 'input',
        name: 'mgrName',
        message: 'Enter the name of the Team Manager:',
        validate: (answer) => {
          if (answer) {
            return true;
          } else {
            return 'Please provide a valid name';
          }
        }
    },
    {
      type: 'input',
      name: 'mgrId',
      message: 'Enter the Id of the Team Manager:',
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          return 'Please provide a valid ID.'
        }
      }
    },
    {
      type: 'input',
      name: 'mgrEmail',
      message: 'Enter the e-mail of the Team Manager:',
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          return 'Please provide a valid e-mail.';
        }
      }
    },
    {
      type: 'input',
      name: 'mgrOffNum',
      message: 'Enter the Office Number of the Team Manager:',
      validate: (answer) => {
        if (answer) {
          if(isNaN(answer)){
            return 'Please provide a valid Office Number.'
          }else{
            return true;
          }
        } else {
          return 'Please provide a valid Office Number.'
        }
      }
    },
    {
      type: 'list',
      name: 'optionTeam',
      message: 'Select from one of the following options:',
      choices: ['Add Engineer', 'Add Intern']
    }
]

// Questions Array for Engineer
const engineerQuest = [
  {
      type: 'input',
      name: 'egrName',
      message: 'Enter the name of the Engineer:',
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          return 'Please provide a valid name';
        }
      }
  },
  {
    type: 'input',
    name: 'egrId',
    message: 'Enter the Id of the Engineer:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid ID.'
      }
    }
  },
  {
    type: 'input',
    name: 'egrEmail',
    message: 'Enter the e-mail of the Engineer:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid e-mail.';
      }
    }
  },
  {
    type: 'input',
    name: 'egrGithub',
    message: 'Enter the Github username of the Engineer:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid Github username.'
      }
    }
  },
  {
    type: 'list',
    name: 'optionTeam',
    message: 'Select from one of the following options:',
    choices: ['Add Engineer', 'Add Intern', 'Create Team']
  }
]

// Questions Array for Intern
const internQuest = [
  {
      type: 'input',
      name: 'intName',
      message: 'Enter the name of the Intern:',
      validate: (answer) => {
        if (answer) {
          return true;
        } else {
          return 'Please provide a valid name';
        }
      }
  },
  {
    type: 'input',
    name: 'intId',
    message: 'Enter the Id of the Intern:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid ID.'
      }
    }
  },
  {
    type: 'input',
    name: 'intEmail',
    message: 'Enter the e-mail of the Intern:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid e-mail.';
      }
    }
  },
  {
    type: 'input',
    name: 'intSchool',
    message: 'Enter the School of the Intern:',
    validate: (answer) => {
      if (answer) {
        return true;
      } else {
        return 'Please provide a valid School.'
      }
    }
  },
  {
    type: 'list',
    name: 'optionTeam',
    message: 'Select from one of the following options:',
    choices: ['Add Engineer', 'Add Intern', 'Create Team']
  }
]

function addManager() {

    inquirer.prompt(managerQuest).then((answers) => {

      addTeamMember('Manager', answers);

      if (answers.optionTeam == 'Add Engineer'){
        console.log('Please enter the Engineer information:');
        addEngineer();
      }else if (answers.optionTeam == 'Add Intern'){
        console.log('Please enter the intern information:');
        addIntern();
      }

    });

}

function addEngineer(){

  inquirer.prompt(engineerQuest).then((answers) => {

    addTeamMember('Engineer', answers);

    if (answers.optionTeam == 'Add Engineer'){
      console.log('Please enter the Engineer information:');
      addEngineer();
    }else if (answers.optionTeam == 'Add Intern'){
      console.log('Please enter the intern information:');
      addIntern();
    }else if(answers.optionTeam == 'Create Team'){
      printTeam();
      writeToFile('./dist/team.html', team);
    }

  });

}

function addIntern(){

  inquirer.prompt(internQuest).then((answers) => {

    addTeamMember('Intern', answers);

    if (answers.optionTeam == 'Add Engineer'){
      console.log('Please enter the Engineer information:');
      addEngineer();
    }else if (answers.optionTeam == 'Add Intern'){
      console.log('Please enter the intern information:');
      addIntern();
    }else if(answers.optionTeam == 'Create Team'){
      printTeam();
      writeToFile('./dist/team.html', team);
    }

  });

}

function addTeamMember(type, data){

  if (type == 'Manager'){
    const manager01 = new Manager(data.mgrName, data.mgrId, data.mgrEmail, +data.mgrOffNum);
    team.push(manager01)
  }else if (type == 'Engineer'){
    const engineer01 = new Engineer(data.egrName, data.egrId, data.egrEmail, data.egrGithub);
    team.push(engineer01);
  }else if (type == 'Intern'){
    const intern01 = new Intern(data.intName, data.intId, data.intEmail, data.intSchool);
    team.push(intern01);
  }

}

function printTeam(){

  console.log('Team has been created!');
  console.log(team);

}

// function to create HTML file
function writeToFile(fileName, data) {

  data.forEach(element => {
    console.log(element.constructor.name);
  });

  const fileContent = genhtml(data);

  fs.writeFile(fileName, fileContent, function (err){
      err ? console.error(err) : console.log('HTML file created!');
  });

}

// call initialization function
addManager();

