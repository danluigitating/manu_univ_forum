const Like = require("../../../database/model/likesModel")

exports.findAll = (req, res) => {
    Like.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving likes."}) : res.send(data)
    })
}

exports.incrementLike = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const like = {
        post_id: req.body.postId,
        user_id: req.body.userId
    }

    Like.create(like, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating likes."
            })
        else res.send(data)
    })
}