const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    categoryId: Number,
    categoryName: String
})

const CategoriesSchema = mongoose.model('CategoriesSchema', categoriesSchema);

module.exports = CategoriesSchema;