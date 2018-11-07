const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatModel = new Schema ({
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Messages'
    }],
    userNames: [{
        type: Schema.Types.ObjectId,
        ref: 'Messages'
    }]
});

const Chats = mongoose.model("Chats", chatModel);

module.exports = Chats;