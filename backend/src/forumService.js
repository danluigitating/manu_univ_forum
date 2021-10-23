const database = require('../../database/database')
const users = require("../../database/usersModel");

module.exports.getAllUsers = (res) => {
    const result = users.findAll()
    console.log('RESULT', result)
    return ''
}