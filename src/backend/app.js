const express = require('express')
const shows = require('./shows');
const app = express()
const port = process.env.PORT || 3001;

app.get('/', (req, res) => res.send('Hello Graham!'))
app.get('/rest/shows', (req, res) => res.send(shows.data))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//Serve any static files from the build folder
app.use(express.static(path.join(__dirname, '../../build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});