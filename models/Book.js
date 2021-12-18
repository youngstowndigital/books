const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    isbn: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    published_at: {
        type: Date
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    publisher: {
        type: String
    }
});

module.exports = Book = mongoose.model('book', BookSchema);
