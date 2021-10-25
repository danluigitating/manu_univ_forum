const Post = require("../../../database/model/postsModel")

exports.findAll = (req, res) => {
    Post.findAll((err, data) => {
        err ? res.status(500).send({message: err.message || "Some error occurred while retrieving posts."}) : res.send(data)
    })
}

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    const post = {
        content: req.body.content,
        tags: req.body.tags,
        user_id: req.body.userId
    }

    Post.create(post, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating Post."
            })
        else res.send(data)
    })
}