const Posts = require('../models/posts');

const getPosts = async (req, res, next) => {
    try {
        const posts = await Posts.find();
        
        res.status(200).json({ message: posts });
    } catch (err) {
        next(err)
    }
}

const createPost = async (req, res, next) => {
    const body = req.body;
    const newPost = Posts(body);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        next(err)
    }
}

const updatePost = async (req, res, next) => {

}

const deletePost = async (req, res, next) => {
    
}