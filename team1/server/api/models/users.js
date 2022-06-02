const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
        required:true
    }, 
    lastname: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    }]
});

const User = mongoose.model('User', UserSchema);

module.exports = {User}