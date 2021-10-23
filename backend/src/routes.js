module.exports = (app) => {
    const user = require("./usersController")

    app.get("/api/v1/users", (req,res) => user.findAll(req, res));

}