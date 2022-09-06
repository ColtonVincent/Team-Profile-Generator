const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const inquirer = require("inquirer")
const generateHTML = require("./src/generateHtml")
const fs = require('fs')
const {writeFile} = fs.promises
const team = []
const promptEngineer = () => {
inquirer.prompt([{
    type: 'input',
    name: 'name',
    message:'What is the Engineers name',
   
},
{
    type: 'input',
    name: 'id',
    message:'What is the Engineers ID',
},
{
    type: 'input',
    name: 'email',
    message:'What is the Engineers email',
},
{
    type: 'input',
    name: 'github',
    message:'What is the Engineers github',
}
])  
.then((data) => {
    const member = new Engineer(data.name, data.id, data.email, data.github)
    team.push(member)
    menu()
}) 
}
const promptIntern = () => {
inquirer.prompt([{
    type: 'input',
    name: 'name',
    message:'What is the Intern name',
   
},
{
    type: 'input',
    name: 'id',
    message:'What is the Intern ID',
},
{
    type: 'input',
    name: 'email',
    message:'What is the Intern email',
},
{
    type: 'input',
    name: 'school',
    message:'What is the Intern school',
}
])  
.then((data) => {
    const member = new Intern(data.name, data.id, data.email, data.school)
    team.push(member)
    menu()
}) 
}
const promptManager = () => {
inquirer.prompt([{
    type: 'input',
    name: 'name',
    message:'What is the Manager name',
   
},
{
    type: 'input',
    name: 'id',
    message:'What is the Manager ID',
},
{
    type: 'input',
    name: 'email',
    message:'What is the Manager email',
},
{
    type: 'input',
    name: 'officeNumber',
    message:'What is the Manager officeNumber',
}
])  
.then((data) => {
    const member = new Manager(data.name, data.id, data.email, data.officeNumber)
    team.push(member)
    menu()
}) 
}

const menu = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'team member create',
        choices: ['Manager', 'Engineer', 'Intern', 'Done']
    }])
    .then((data) => {
        switch(data.action){
            case 'Manager':
                promptManager()
                break;
            case 'Engineer':
                promptEngineer()
                break;
            case 'Intern':
                promptIntern()
                break;
            default:
            writeFile('dist/index.html', generateHTML(team))
        }
    })
}
menu()