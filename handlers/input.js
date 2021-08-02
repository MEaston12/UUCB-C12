const inquirer = require('inquirer');
const db = require('db');

const prompts = require('../prompts');

const run = async () => {
    const action = await inquirer.prompt(prompts.action);
    if(!action) return;
    let response = await require(action)(db);
    if(typeof response == 'string') console.log(response);
    else (console.table(response));

    run(); //Recursive call - will infinite loop unless exit early
}

module.exports = {run};