module.exports = [
    {
        name: 'name',
        message: "What is the name of this intern?",
        validate: input => !!input
    },
    {
        name: 'id',
        message: "What is the id number of this intern?",
        validate: input => !!input
    },
    {
        name: 'email',
        message: "What is the email address of this intern?",
        validate: input => !!input
    },
    {
        name: 'school',
        message: "What is the school of this intern?",
        validate: input => !!input
    }
]