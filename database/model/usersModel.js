const sql = require('../database')

const User = (user) => {
    this.userId = user.user_id
    this.username = user.username
    this.firstName = user.first_name
    this.middleName = user.middle_name
    this.lastName = user.middle_name
}

User.findAll = result => {
    sql.query("SELECT * FROM USERS", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = User

