const mongoose = require("mongoose");

const tokenSchema = monoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Data,
        required: true,
    },
    expiresAt: {
        type: Data,
        required: true,
    },
})

const Token = mongoose.model("Token", tokenSchema);
module.exports = Token;