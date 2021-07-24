module.exports = [
    {
        name: 'name',
        message: "What is the name of this engineer?",
        validate: input => !!input
    },
    {
        name: 'id',
        message: "What is the id number of this engineer?",
        validate: input => !!input
    },
    {
        name: 'email',
        message: "What is the email address of this engineer?",
        validate: input => !!input
    },
    {
        name: 'github',
        message: "What is the github username of this engineer?",
        validate: input => !!input
    }
]