module.exports = {
    action: require('./action'),
    department: {
        add: require('./addDepartment')
    },
    employee: {
        add: require('./addEmployee')
    },
    role: {
        add: require('./addRole')
    }
}