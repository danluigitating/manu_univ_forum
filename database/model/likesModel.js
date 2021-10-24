const sql = require('../database')

const Like = (like) => {
    this.likeId = like.like_id
    this.postId = like.post_id
    this.userId = like.user_id
}

Like.findAll = result => {
    sql.query("SELECT * FROM LIKES", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Like

