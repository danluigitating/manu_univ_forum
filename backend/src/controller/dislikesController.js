const Dislike = require("../../../database/model/dislikesModel")

exports.findAll = (req, res) => {
    Dislike.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving dislikes."}) : res.send(data)
    })
}
