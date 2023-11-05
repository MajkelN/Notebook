const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    }
}, {
    timestamps: true
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);