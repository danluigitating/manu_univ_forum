const Post = require("../../../database/model/postsModel")

exports.findAll = (req, res) => {
    Post.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving posts."}) : res.send(data)
    })
}
