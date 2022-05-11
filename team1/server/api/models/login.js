const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    userId: String,
    email: String,
    password: String
})

const LoginSchema = mongoose.model('LoginSchema', loginSchema);

module.exports = LoginSchema;