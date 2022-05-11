const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    postId: Number,
    userId: String,
    title: String,
    body: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    comments: []
})

const Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;