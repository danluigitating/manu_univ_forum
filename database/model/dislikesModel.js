const sql = require('../database')

const Dislike = (like) => {
    this.dislikeId = like.dislike_id
    this.postId = like.post_id
    this.userId = like.user_id
}

Dislike.findAll = result => {
    sql.query("SELECT * FROM DISLIKES", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Dislike

