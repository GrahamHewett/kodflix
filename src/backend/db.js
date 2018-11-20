const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

module.exports = { connect };

function connect() {
    return new Promise((resolve) => {
        MongoClient.connect(url, function(err, mongoDB) {
            if (err) throw err;
            const dbo = mongoDB.db("kodflix");
            console.log(dbo);
            resolve(dbo); 
          });
    });
}