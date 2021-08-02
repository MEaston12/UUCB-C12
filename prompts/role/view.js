module.exports = async db => {
    return (await db.role.viewAll())[0]
}