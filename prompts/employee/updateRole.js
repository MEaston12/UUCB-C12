const inq = require('inquirer');

let roles = [];
let employees = [];

const prompts = [
    {
        name: 'employee',
        message: "Which employee to change the role of?",
        type: 'list',
        choices: employees
    },
    {
        name: 'role',
        message: "Which role to set for this employee?",
        type: 'list',
        choices: roles
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
        if(ans.employee.includes(empl.first_name) && ans.employee.includes(empl.last_name)) ans.employee_id = empl.id;
    }

    await db.employee.updateRole(ans);
    return `Updated ${ans.first_name} ${ans.last_name}!`;
}