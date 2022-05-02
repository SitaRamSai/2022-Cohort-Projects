const Categories = require('../models/categories');

const getCategories = async (req, res, next) => {
    try {
        const categories = await Categories.find();

        res.status(200).json(categories);
    } catch (err) {
        next(err);
    }
}