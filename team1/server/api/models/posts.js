const mongoose = require('mongoose');
const { User } = require('./users');
const {ObjectId} = mongoose.Schema;

const PostSchema = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required:true
    }, 
    subtitle: {
        type: String,
        required:true
    },
    body: {
        type: String,
        required:true
    },
    postImg: {
        type: String, 
    },
    datecreated: {
        type: Date,
        default: new Date(),
    },
    readlength: {
        type: Number, 
    }
});


const Post = mongoose.model('Post', PostSchema);

module.exports = {Post}
