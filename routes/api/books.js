const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ message: 'No books found' }));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json({ message: 'No book found' }));
});

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => res.status(400).json({ error: "Unable to add book" }));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.params.json(book))
        .catch(err => res.status(400).json({ error: 'Unable to update book' }));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(book => res.json({ message: 'Book entry destroyed' }))
        .catch(err => res.status(404).json({ error: 'No book found' }));
});

module.exports = router;
