var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var pipeline = require('./pipeline.js');
var result = require('./result.js');

describe('test query', function () {
    it('should return array of 15 elements', function () {
        var url = 'mongodb://localhost:27017/truvoice_test';

        MongoClient.connect(url, function (err, db) {
            var collection = db.collection('opportunities');

            collection.aggregate(pipeline).toArray(function (err, docs) {

                assert.equal(docs, result);
                db.close();
            });

        });
    });
});