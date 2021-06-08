const inquirer = require('inquirer');

const Manager = require('../classes/Manager');
const Engineer = require('../classes/Engineer');
const Intern = require('../classes/Intern');

const managerPrompts = require('../prompts/managerPrompts');
const engineerPrompts = require('../prompts/engineerPrompts');
const internPrompts = require('../prompts/internPrompts');
const loopPrompt = require('../prompts/loopPrompt');

module.exports = {
    async buildTeam(){
        const team = {
            manager: {},
            engineers: [],
            interns: []
        };
        let answers = await inquirer.prompt(managerPrompts);
        team.manager = new Manager(answers.id, answers.name, answers.email, answers.officeNumber);
        
        do{
            answers = await inquirer.prompt(loopPrompt);
            if(answers.selection === "Engineer"){
                const input = await inquirer.prompt(engineerPrompts);
                team.engineers.push(new Engineer(input.id,input.name,input.email,input.github));
            }
            else if(answers.selection === "Intern") {
                const input = await inquirer.prompt(internPrompts);
                team.interns.push(new Intern(input.id,input.name,input.email,input.school));
            }
        } while(answers.selection) //Answers.selection will return false if user selected to finish
        return team;
    }
}