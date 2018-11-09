const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userModel = new Schema ({
    username: {
        type: String,
        required: [true, "Username required"],
        unique: [true, 'Username taken'],
        trim: true,
        minlength: [4, 'Username must be at least 4 characters'],
        maxlength: [16, 'Username must be less than 16 characters']
    },
    password: {
        type: String,
        required: [true, "Password required"],
        trim: true,
        minlength: [8, 'Password must be at least 8 characters'],
        maxlength: [32, 'Password must be less than 32 characters']
    }
});

const Users = mongoose.model("Users", userModel);

module.exports = Users;