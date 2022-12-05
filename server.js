//npm install

const express = require('express');
const app = express();
const port = 3000;

app.get('/ma-premiere-page', (req, res) => {
    res.send('Hello World');
});

app.get('/', (req, res) => {
    res.send('Hello Tout le monde');
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});