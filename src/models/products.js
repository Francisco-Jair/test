const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    titles: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: true,
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true,
    }],
})

module.exports = mongoose.model("Product", schema)