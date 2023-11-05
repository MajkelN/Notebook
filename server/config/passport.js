const passport = require("passport");
const User = require("../models/user");

module.exports = () => {
    passport.use(User.createStrategy())
}