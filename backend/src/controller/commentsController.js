const Comment = require("../../../database/model/commentsModel")

exports.findAll = (req, res) => {
    Comment.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving comments."}) : res.send(data)
    })
}
