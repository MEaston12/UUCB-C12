module.exports = 
{
    name: 'selection',
    type: 'list',
    message: "Select an action or exit the program.",
    choices: [
        {
            name: "View all Departments",
            value: "department/view"
        },
        {
            name: "View all Roles",
            value: "role/view"
        },
        {
            name: "View all Employees",
            value: "employee/view"
        },
        {
            name: "Add a Department",
            value: "department/add"
        },
        {
            name: "Add a Role",
            value: "role/add"
        },
        {
            name: "Add an Employee",
            value: "employee/add"
        },
        {
            name: "Update an Employee's Role",
            value: "employee/updateRole"
        },
        {
            name: "Exit the program",
            value: false
        }
    ]
}