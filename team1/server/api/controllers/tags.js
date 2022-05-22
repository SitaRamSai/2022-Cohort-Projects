const Tags = require('../models/tags');

const getTags = async (req, res, next) => {
    try {
        const tags = await Tags.find();

        res.status(200).json(Tags);
    } catch (err) {
        next(err);
    }
}