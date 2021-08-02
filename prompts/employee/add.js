const inq = require('inquirer');

let roles = [];
let employees = [];

const prompts = [
    {
        name: 'first_name',
        message: "What is the first name of this employee?",
        validate: input => !!input
    },
    {
        name: 'last_name',
        message: "What is the last name of this employee?",
        validate: input => !!input
    },
    {
        name: 'role',
        message: "What is the role of this employee?",
        type: 'list',
        choices: roles
    },
    {
        name: 'manager',
        message: "Who is this employee's manager?",
        type: 'list',
        choices: employees
    }
]

module.exports = async db => {
    const roleTable =  (await db.role.viewAll())[0];
    roles.length = 0;
    for(let role of roleTable){ roles.push(role.title) }

    const emplTable =  (await db.employee.viewAll())[0];
    employees.length = 0;
    for(let empl of emplTable){ employees.push(`${empl.first_name} ${empl.last_name}`) }
    
    const ans = await inq.prompt(prompts);
    
    for(let role of roleTable){ if(role.title === ans.role) ans.role_id = role.id; }
    for(let empl of emplTable){
        if(ans.manager.includes(empl.first_name) && ans.manager.includes(empl.last_name)) ans.manager_id = empl.id;
    }

    await db.employee.add(ans);
    return `Added ${ans.first_name} ${ans.last_name}!`;
}