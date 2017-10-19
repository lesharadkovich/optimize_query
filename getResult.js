var MongoClient = require('mongodb').MongoClient;
var pipeline = require('./pipeline.js');

var url = 'mongodb://localhost:27017/truvoice_test';

module.exports =
    MongoClient.connect(url)
        .then(function (db) {
            return db;
        })
        .then(function (db) {
            let res = db.collection('opportunities').aggregate(pipeline).toArray();
            db.close();
            return res;
        })
        .catch(function (e) {
            console.log(e);
        });