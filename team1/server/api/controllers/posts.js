const {Post} = require('../models/posts');

const getPosts = async (req, res) => {
    Post.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
}

const getPost = (req, res) => {
    Post.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
}

const createPost = async (req, res) => {
    const pst = new Post({
        title: req.body.title,
        subtitle: req.body.subtitle,
        body: req.body.body
    });
    pst.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Post Added Successfully', addPost: data})
        } else {
           console.log(err);
        }
    });
}

const updatePost = async (req, res, next) => {

}

const deletePost = async (req, res, next) => {
    
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}