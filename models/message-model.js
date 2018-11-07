const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageModel = new Schema ({
    sender: {
        type: String
    },
    message: {
        type: String
    }
});

const Messages = mongoose.model("Messages", messageModel);

module.exports = Messages;