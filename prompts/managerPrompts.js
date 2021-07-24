module.exports = [
    {
        name: 'name',
        message: "What is the name of your team's manager?",
        validate: input => !!input
    },
    {
        name: 'id',
        message: "What is the id number of your team's manager?",
        validate: input => !!input
    },
    {
        name: 'email',
        message: "What is the email address of your team's manager?",
        validate: input => !!input
    },
    {
        name: 'officeNumber',
        message: "What is the office number of your team's manager?",
        validate: input => !!input
    }
]