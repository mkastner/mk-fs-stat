/* jslint node: true, strict: implied, esversion: 6 */

const fs = require('fs'),
    onError = require('mk-log/lib/mk-on-error');

/**
 * promisified fs.stat
 *
 * No error is being thrown if target file or directory
 * does not exist. Instead status === failure
 *
 * @param  {String} filePath target file path either dir or file
 * @return {Promise} resolves to result object
 */
function statFile(filePath) {

    return new Promise(function(resolve, reject) {

        fs.stat(filePath, function(err, stats) {

            let result = {};

            //console.log('error', err);
            //console.log('stats', stats);

            if (err) {
                result.status = 'failure';

                if (err && err.code === 'ENOENT') {


                    result.stats = stats;

                    resolve(result);

                } else {
                    reject(err);
                }
            } else {

                //console.log();

                result.status = 'success';
                result.stats = stats;
                resolve(result);
            }

        });

    }).catch(onError);

}

module.exports = statFile;
