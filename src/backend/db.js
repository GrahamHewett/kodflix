const MongoClient = require('mongodb').MongoClient;
const url = ''

module.exports = { connect };

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, mongoDB) {
            if (err) throw err;
            const dbo = mongoDB.db("kodflix");
            console.log(dbo);
            resolve(dbo); 
          });
    });
}

//   dbo.collection("shows").find({}).toArray({}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     mongoDB.close();
//   });