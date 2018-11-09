const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatModel = new Schema ({
    messages: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Messages'
    }
],
    users: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
]
});

const Chats = mongoose.model("Chats", chatModel);

module.exports = Chats;