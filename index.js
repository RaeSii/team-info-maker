const inquirer = require('inquirer')

const Engineer = require('./lib/Engineer')

const Intern = require('./lib/Intern')

const Manager = require('./lib/Manager')

function init() {
    inquirer.prompt([{
        type: "list",
        name: "user-choice",
        message: "What would like to do?",
        choices: ["add manager, add engineer, add intern", "Exit Application"]

    }])
        .then(function (response) {
            switch (response.user_choice) {
                case "add manager":
                    addManager();
                    break;
                case "add engineer":
                    addEngineer();
                    break;
                case "add intern":
                    addIntern();
                    break;
                case "Exit Application":
                    exitApplication();
            }
        })
}