const mongoose = require('mongoose');

const tagsSchema = mongoose.Schema({
    tagId: Number,
    tagName: String,
})

const TagSchema = mongoose.model('tagSchema', tagsSchema);

module.exports = tagsSchema;