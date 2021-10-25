const Dislike = require("../../../database/model/dislikesModel")

exports.findAll = (req, res) => {
    Dislike.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving dislikes."}) : res.send(data)
    })
}

exports.incrementDislike = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const dislike = {
        post_id: req.body.postId,
        user_id: req.body.userId
    }

    Dislike.create(dislike, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating dislike."
            })
        else res.send(data)
    })
}