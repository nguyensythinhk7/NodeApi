const databaseName = "employee_manager";
const urlRoot = "mongodb://localhost:27017/"
module.exports = {
    url: urlRoot + databaseName,
    urlRoot: urlRoot,
    database: databaseName
}