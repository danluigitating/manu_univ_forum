const User = require("../../../database/model/usersModel")

exports.findAll = (req, res) => {
    User.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving users."}) : res.send(data)
    })
}
