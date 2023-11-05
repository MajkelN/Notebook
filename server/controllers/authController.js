const User = require("../models/user");
const jwt = require("jsonwebtoken");

const AuthController = {
    async login(req, res) {
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {expiresIn: 3600});

        return res.json({ token, id: req.user._id  })
    },

    async register(req, res) {
        const {firstName, lastName, email, password} = req.body;

        if(await User.findOne({ email: email }).exec() === null) {
            const user = new User({firstName, lastName, email});
            await User.register(user, password);

            res.json({ message: "User created succesfully. Now you can log in."});
        } else {
            res.json({ message: 'A user with this email already exists.' })
        }
    }
}

module.exports = AuthController;