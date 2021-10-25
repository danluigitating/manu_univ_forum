const sql = require('../database')

const Post = (post) => {
    this.postId = post.post_id
    this.content = post.content
    this.tags = post.tags
    this.userId = post.user_id
    this.likes = post.likes
    this.dislikes = post.dislikes
    this.createDate = post.create_date
    this.updateDate = post.update_date
}

Post.findAll = result => {
    sql.query("SELECT * FROM POSTS", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }
        result(null, res)
    });
};

Post.create = (post, result) => {
    sql.query("INSERT INTO POSTS SET ?", post, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        result(null, { id: res.insertId, ...post })
    })
}

module.exports = Post

