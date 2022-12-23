const inquirer = require('inquirer');
const fs = require('fs');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

function init(){
    addMembers();
    startHtml();

}
function addMembers(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number?',
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
            when: (answers) => answers.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addMember',
            message: 'Would you like to add another member?',
            default: false
        }
    ]).then((answers) => {
        if(answers.role === 'Manager'){
            const newManager = new manager(answers.name, answers.id, answers.email, answers.office);
            addHtml(newManager);
        }else if(answers.role === 'Engineer'){
            const newEngineer = new engineer(answers.name, answers.id, answers.email, answers.github);
            addHtml(newEngineer);
        }else if(answers.role === 'Intern'){
            const newIntern = new intern(answers.name, answers.id, answers.email, answers.school);
            addHtml(newIntern);
        }
        if(answers.addMember){
            addMembers();
        }else{
            endHtml();
        }
    }
    )
}
function startHtml(){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
            <div class="row">
    `
    fs.writeFile('./index.html', html, (err) => {
        if(err){
            console.log(err);
        }
    }
    )
}
function addHtml(member){
    return new Promise((resolve, reject) => {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = '';
        if(role === 'Manager'){
            const office = member.getOffice();
            data = `
            <div class="col-4">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title
                        ">${name}</h2>
                        <h3 class="card-title
                        "><i class="fas fa-mug-hot mr-2"></i>${role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group
                        ">
                            <li class="list-group
                            -item">ID: ${id}</li>
                            <li class="list-group
                            -item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group
                            -item">Office number: ${office}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }else if(role === 'Engineer'){
            const github = member.getGithub();
            data = `
            <div class="col-4">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title
                        ">${name}</h2>
                        <h3 class="card-title
                        "><i class="fas fa-glasses mr-2"></i>${role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group
                        ">
                            <li class="list-group
                            -item">ID: ${id}</li>
                            <li class="list-group
                            -item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group
                            -item">GitHub: <a href="Github:${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }else if(role === 'Intern'){
            const school = member.getSchool();
            data = `
            <div class="col-4">
                <div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title
                        ">${name}</h2>
                        <h3 class="card-title
                        "><i class="fas fa-user-graduate mr-2"></i>${role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group
                        ">
                            <li class="list-group
                            -item">ID: ${id}</li>
                            <li class="list-group
                            -item">Email: <a href="mailto:${email}">${email}</a></li>
                            <li class="list-group
                            -item">School: ${school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
        fs.appendFile('./index.html', data, (err) => {
            if(err){
                reject(err);
                return;
            }
            resolve();
        }
        )
    }
    )
}
function endHtml(){
    const html = `
            </div>
        </div>
    </body>
    </html>
    `
    fs.appendFile('./index.html', html, (err) => {
        if(err){
            console.log(err);
        }
    }
    )
}
init();
