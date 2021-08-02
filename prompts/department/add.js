const inq = require('inquirer');

const prompts = [
    {
        name: 'name',
        message: "What is the name of this department?",
        validate: input => !!input
    }
]

module.exports = async db => {
    const ans = await inq.prompt(prompts);
    await db.department.add(ans);
    return `Added ${ans.name}!`;
}