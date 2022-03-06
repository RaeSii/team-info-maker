const inquirer = require('inquirer')

const Engineer = require('./lib/Engineer')

const Intern = require('./lib/Intern')

const Manager = require('./lib/Manager')

const managerTemplate = require('./templates/managerTemplate')

let managerHtml = ''

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


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "manager name",
            message: "Enter Employee Name",    
        },
        {
            type: "input",
            name: "manager email",
            message: "Enter Employee Email",    
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID",    
        },
        {
            type: "input",
            name: "office number",
            message: "Enter Employee Office Number",    
        },
    ])
    .then(function(response){
        const newManager = new Manager(response.manager_name,response.id,response.manager_email,response.office_number)
        managerHtml += managerTemplate(newManager)
        console.log(managerHtml)
    })
}