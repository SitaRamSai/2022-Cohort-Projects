const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postId: Number,
    user: {
        userId: {type: Number, required: true},
        userName: {type: String, required: true},
        userImg: {type: String, required: true}
    },
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
    body: {type: String, required: true},
    postImg: {type: String, required: true},
    dateCreated: {
        type: Date,
        default: new Date()
    },
    readLength: {type: Number, required: true}  
})

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;