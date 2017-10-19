var assert = require('assert');

var result = require('./result.js');
var getResult = require('./getResult.js');

describe('test query', function () {
    after(function () {
        // runs after all tests in this block
    });

    it('should return array of 15 elements', async function () {
        let doc = await getResult;

        result = JSON.parse(JSON.stringify(result));
        getResult = JSON.parse(JSON.stringify(doc));


        assert.deepEqual(getResult, result);
    });
});