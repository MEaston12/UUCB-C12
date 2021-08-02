module.exports = async db => {
    return (await db.department.viewAll())[0]
}