const sql = require('../database')

const Dislike = (like) => {
    this.dislikeId = like.dislike_id
    this.postId = like.post_id
    this.userId = like.user_id
}

Dislike.findAll = result => {
    sql.query("SELECT * FROM DISLIKES", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }
        result(null, res)
    })
}

Dislike.create = (dislike, result) => {
    sql.query("INSERT INTO DISLIKES SET ?", dislike, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        result(null, {id: res.insertId, ...dislike})

        if (res.insertId) {
            sql.query("UPDATE POSTS SET DISLIKES = DISLIKES + 1 WHERE POST_ID = ?", [dislike.post_id],
                (err, res) => {
                    if (err) {
                        console.log("error: ", err)
                        result(null, err)
                        return
                    }
                })
        }
    })
}

module.exports = Dislike

