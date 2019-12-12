const express = require('express');
const app = express();
const port = 3001;
const shows = require('./shows')

app.get('/', (req, res) => res.send('Hello Williams!'));
app.get('/rest/shows', (req, res) => res.send(shows()));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));