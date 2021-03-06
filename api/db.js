const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.NODE_ENV === 'production' ? 
  process.env.DB_URL_PRD :
  process.env.DB_URL_DEV;
const dbName = url.substr(url.lastIndexOf('/') + 1)

module.exports = { connect };

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true },
            function(err, mongoDB) {
            if (err) {reject(err)};
            const dbo = mongoDB.db(dbName);
            resolve(dbo); 
          }).catch(err => console.log(err));
    });
}