const Like = require("../../../database/model/likesModel")

exports.findAll = (req, res) => {
    Like.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving likes."}) : res.send(data)
    })
}
