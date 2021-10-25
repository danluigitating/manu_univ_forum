module.exports = (app) => {
    const user = require("./controller/usersController")
    const post = require("./controller/postsController")
    const comment = require("./controller/commentsController")
    const like = require("./controller/likesController")
    const dislike = require("./controller/dislikesController")

    app.get("/api/v1/users", (req,res) => user.findAll(req, res))
    app.get("/api/v1/posts", (req,res) => post.findAll(req, res))
    app.get("/api/v1/comments", (req,res) => comment.findAll(req, res))
    app.get("/api/v1/likes", (req,res) => like.findAll(req, res))
    app.get("/api/v1/dislikes", (req,res) => dislike.findAll(req, res))

    app.post("/api/v1/post", (req, res) => post.create(req, res))
    app.post("/api/v1/comment", (req, res) => comment.create(req, res))

    app.post("/api/v1/like", (req, res) => like.incrementLike(req, res))
    app.post("/api/v1/dislike", (req, res) => dislike.incrementDislike(req, res))
}