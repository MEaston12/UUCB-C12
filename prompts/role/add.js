const inq = require('inquirer');

let departments = [];

const prompts = [
    {
        name: 'title',
        message: 'What is the title of this role?',
        validate: input => !!input
    },
    {
        name: 'salary',
        message: 'What is the salary of this role?',
        type: 'number',
        validate: input => !!input
    },
    {
        name: 'department',
        message: 'Which department does this role belong to?',
        type: 'list',
        choices: departments
    }
]

module.exports = async db => {
    const depTable = (await db.department.viewAll())[0];
    departments.length = 0;
    for(let dep of depTable){ departments.push(dep.name); }

    const ans = await inq.prompt(prompts);

    for(let dep of depTable){ if(dep.name === ans.department) ans.department_id = dep.id; }

    await db.role.add(ans);
    return `Added ${ans.title}!`;
}