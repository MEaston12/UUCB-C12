const inquirer = require('inquirer');
const db = require('./db');

const actionPrompt = require('../prompts/action');

const run = async () => {
    const action = await inquirer.prompt(actionPrompt);
    console.log(action);
    if(!action.selection) return;
    const response = await require('../prompts/' + action.selection)(db);
    if(typeof response == 'string') console.log(response);
    else (console.table(response));

    return run(); //Recursive call - will infinite loop unless exit early
}

module.exports = {run};