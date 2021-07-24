module.exports = 
{
    name: 'selection',
    type: 'list',
    message: "Add a new team member or finish the program now!",
    choices: [
        "Engineer",
        "Intern",
        {
            name:"Finish the program.",
            value: false
        }
    ]
}