const sql = require('../database')

const Like = (like) => {
    this.likeId = like.like_id
    this.postId = like.post_id
    this.userId = like.user_id
}

Like.findAll = result => {
    sql.query("SELECT * FROM LIKES", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
            return
        }
        result(null, res)
    })
}

Like.create = (like, result) => {
    sql.query("INSERT INTO LIKES SET ?", like, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(err, null)
            return
        }
        result(null, { id: res.insertId, ...like })

        if(res.insertId) {
            sql.query("UPDATE POSTS SET LIKES = LIKES + 1 WHERE POST_ID = ?", [like.post_id],
                (err, res) => {
                    if (err) {
                        console.log("error: ", err)
                        result(null, err)
                        return
                    }
                }
            )
        }

    })
}

module.exports = Like

