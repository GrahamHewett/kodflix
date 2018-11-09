const express = require('express')
const shows = require('./shows');
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello Graham!'))
app.get('/rest/shows', (req, res) => res.send(shows.data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))