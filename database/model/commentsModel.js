const sql = require('../database')

const Comment = (comment) => {
    this.commentId = comment.comment_id
    this.postId = comment.post_is
    this.content = comment.content
    this.userId = comment.user_id
    this.likes = comment.likes
    this.dislikes = comment.dislikes
    this.createDate = comment.create_date
    this.updateDate = comment.update_date
}

Comment.findAll = result => {
    sql.query("SELECT * FROM COMMENTS", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }
        result(null, res)
    });
};

module.exports = Comment

