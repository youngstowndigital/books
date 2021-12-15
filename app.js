const express = require('express');
const app = express();
const connectDB = require('./db');

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api/books', require('./routes/api/books'));

const port = process.env.PORT || 8082;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
