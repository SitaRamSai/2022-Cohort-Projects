const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    username: String
})

const UserMessage = mongoose.model('UserMessage', userSchema);

module.exports = UserMessage;