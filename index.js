const fs = require('fs')
const inquirer = require('inquirer')

const Engineer = require('./lib/Engineer')

const Intern = require('./lib/Intern')

const Manager = require('./lib/Manager')

const managerTemplate = require('./templates/managerTemplate')

const engineerTemplate = require('./templates/engineerTemplate')

const internTemplate = require('./templates/internTemplate')

const htmlTemplate = require('./templates/index')
let managerHtml = ''
let engineerHtml = ''
let internHtml = ''

function init() {
    inquirer.prompt([{
        type: "list",
        name: "user_choice",
        message: "What would like to do?",
        choices: ["add manager", "add engineer", "add intern", "Exit Application"]

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
};


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managername",
            message: "Enter Employee Name",    
        },
        {
            type: "input",
            name: "manageremail",
            message: "Enter Employee Email",    
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID",    
        },
        {
            type: "input",
            name: "officenumber",
            message: "Enter Employee Office Number",    
        },
    ])
    .then(function(response){
        const newManager = new Manager(response.managername,response.id,response.manageremail,response.officenumber)
        managerHtml += managerTemplate(newManager)
        console.log(managerHtml)
        init()
    })
};

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineername",
            message: "Enter Employee Name",    
        },
        {
            type: "input",
            name: "engineeremail",
            message: "Enter Employee Email",    
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID",    
        },
        {
            type: "input",
            name: "githubusername",
            message: "Enter GitHub User Name",    
        },
    ])
    .then(function(response){
        const newEngineer = new Engineer(response.engineername,response.id,response.engineeremail,response.githubusername)
        engineerHtml += engineerTemplate(newEngineer)
        console.log(engineerHtml)
        init()
    })
};

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internname",
            message: "Enter Employee Name",    
        },
        {
            type: "input",
            name: "internemail",
            message: "Enter Employee Email",    
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee ID",    
        },
        {
            type: "input",
            name: "school",
            message: "Enter Employee School",    
        },
    ])
    .then(function(response){
        const newIntern = new Intern(response.internname,response.id,response.internemail,response.school)
        internHtml += internTemplate(newIntern)
        console.log(internHtml)
        init()
    })
};

async function exitApplication() {
    const htmlData = await htmlTemplate(
        {
            manager: managerHtml,
            intern: internHtml,
            engineer: engineerHtml
            
        }
    )
    console.log(htmlData)
   fs.writeFileSync('index.html',htmlData,function(err){
       if(err)throw err
   }) 

}

init()