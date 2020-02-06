const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;
const shows = require('./showsData')

app.get('/api/shows', (req, res) => {
    res.send(shows());
})

app.get('/api/show/:id', (req, res) => {
    res.send(shows().find(show => show.id === req.params.id));
})

// const db = require('./db');
// db.connect().then(dbo => {
//     app.get('/db/shows', (req, res) => {
//         dbo.collection('shows').find({}).toArray((err, results) => {
//             if (err) throw err;
//             res.send(results);
//         });
//     });
//     app.get('/db/shows/:id', (req, res) => {
//         dbo.collection('shows').findOne({id: req.params.id},(err, show) => {
//             if (err) throw err;
//             res.send(show || { error: 'not found!' });
//         });
//     })
//});

    //Serve any static files from the build folder
    // app.use(express.static(path.join(__dirname, '../../build')));
    // app.get('*', function (req, res) {
    //     res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    // });
    // Handle React routing, return all requests to React app

app.listen(port, () => console.log(`Server listening on port ${port}!`))