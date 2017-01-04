/* jslint node: true, strict:implied, esversion: 6 */

const   path = require('path'),
        tape = require('tape'),
        fsStat = require('../index');

tape(function (t) {

    //t.plan(2);

    async function run() {

        var existingFilePath = path.join(path.resolve('./'), 'test/playground/testfile.txt');

        let existResult = await fsStat(existingFilePath);

        //console.log('existResult', existResult);

        t.equal(existResult.status, 'success');

        var notThereFilePath = path.join(path.resolve('./'), 'test/playground/notthere.txt');

        let notThereResult = await fsStat(notThereFilePath);

        t.equal(notThereResult.status, 'success');

        //console.log('notThereResult', notThereResult);

        t.end();

    }

    run();

});
