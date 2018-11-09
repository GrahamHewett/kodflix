const express = require('express')
const shows = require('./shows');

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!' + shows.data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))