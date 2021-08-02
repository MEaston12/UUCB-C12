module.exports = async db => {
    return (await db.employee.viewAll())[0]
}