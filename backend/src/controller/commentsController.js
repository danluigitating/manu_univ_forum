const Comment = require("../../../database/model/commentsModel")

exports.findAll = (req, res) => {
    Comment.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving comments."}) : res.send(data)
    })
}

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const comment = {
        content: req.body.content,
        user_id: req.body.userId,
        post_id: req.body.postId
    }

    Comment.create(comment, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating comment."
            })
        else res.send(data)
    })
}
