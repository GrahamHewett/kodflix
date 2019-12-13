const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3001;
const shows = require('./showsData')
// const db = require('./db');

app.get('/shows', (req, res) => {
    res.send(shows());
})

app.get('/show/:id', (req, res) => {
    console.log(req.params.id);
    res.send(shows().find(show => show.id === req.params.id));
})

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
    app.use(express.static(path.join(__dirname, '../../build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
    // Handle React routing, return all requests to React app

    app.listen(port, () => console.log(`Server listening on port ${port}!`))
